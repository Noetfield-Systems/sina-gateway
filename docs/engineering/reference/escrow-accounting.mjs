// SPDX-License-Identifier: MIT
// Independent reference model of the public SEEKMESH escrow accounting semantics.
// No private source, real funds, RPC, EVM execution, or contract-audit claim.
// Run: node docs/engineering/reference/escrow-accounting.mjs
function runReference() {
  const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
  const reject=(fn,reason)=>{let e;try{fn()}catch(err){e=err}assert(e?.message===reason,"expected rejection: "+reason)};
  const fee=(a,b)=>a*b/10000n;
  class EscrowModel {
    constructor(){this.campaigns=new Map();this.cash=0n;this.totalFunded=0n;this.totalRewards=0n;this.totalFees=0n;this.totalRefunds=0n}
    fund(id,sponsor,verifier,budget,bps,deadline,now){
      if(this.campaigns.has(id)||!sponsor||!verifier||budget<=0n||bps<0n||bps>500n||deadline<=now+3600||deadline>now+90*86400)throw Error("config");
      const reserve=fee(budget,bps);
      this.campaigns.set(id,{sponsor,verifier,budget,bps,deadline,reserve,spent:0n,fees:0n,refunded:false,proofs:new Set()});
      this.cash+=budget+reserve;this.totalFunded+=budget+reserve;this.check()
    }
    pay(id,caller,proof,recipient,amount,now){
      const c=this.campaigns.get(id);if(!c)throw Error("missing");if(caller!==c.verifier)throw Error("authority");if(c.refunded||now>=c.deadline)throw Error("closed");if(!proof||!recipient||amount<=0n)throw Error("config");if(c.proofs.has(proof))throw Error("replay");const f=fee(amount,c.bps);if(amount>c.budget-c.spent||f>c.reserve-c.fees)throw Error("budget");
      c.proofs.add(proof);c.spent+=amount;c.fees+=f;this.cash-=amount+f;this.totalRewards+=amount;this.totalFees+=f;this.check()
    }
    refund(id,caller,now){
      const c=this.campaigns.get(id);if(!c)throw Error("missing");if(caller!==c.sponsor)throw Error("authority");if(c.refunded||now<c.deadline)throw Error("refund");const amount=c.budget-c.spent+c.reserve-c.fees;c.refunded=true;this.cash-=amount;this.totalRefunds+=amount;this.check();return amount
    }
    check(){
      let liability=0n;for(const c of this.campaigns.values()){assert(c.spent>=0n&&c.spent<=c.budget,"reward bound");assert(c.fees>=0n&&c.fees<=c.reserve,"fee bound");if(!c.refunded)liability+=c.budget-c.spent+c.reserve-c.fees}
      assert(this.cash===liability,"aggregate liability");assert(this.totalFunded===this.cash+this.totalRewards+this.totalFees+this.totalRefunds,"conservation");
    }
  }
  const now=100000, deadline=now+86400;
  const e=new EscrowModel();e.fund("a","s","v",1000000n,250n,deadline,now);e.fund("b","s2","v2",101n,500n,deadline,now);
  e.pay("a","v","p","r",400000n,now);
  reject(()=>e.pay("a","v","p","r",1n,now),"replay");
  reject(()=>e.pay("a","v2","x","r",1n,now),"authority");
  reject(()=>e.pay("a","v","x","r",600001n,now),"budget");
  reject(()=>e.refund("a","s",now),"refund");
  reject(()=>e.pay("a","v","x","r",1n,deadline),"closed");
  assert(e.refund("a","s",deadline)===615000n,"refund exact");reject(()=>e.refund("a","s",deadline),"refund");
  e.pay("b","v2","p","r",100n,now);assert(e.refund("b","s2",deadline)===1n,"campaign isolation");assert(e.cash===0n,"closed balance");
  let seed=0x1341a1d3;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed};
  let payouts=0;const scenarios=2048;
  for(let i=0;i<scenarios;i++){
    const x=new EscrowModel(),budget=BigInt(rand()%1000000+1),bps=BigInt(rand()%501);x.fund("x","s","v",budget,bps,deadline,now);let remaining=budget;
    for(let j=0;j<12&&remaining>0n;j++){const amount=BigInt(rand())%remaining+1n;x.pay("x","v",String(j),"r",amount,now);remaining-=amount;payouts++}
    x.refund("x","s",deadline);assert(x.cash===0n,"terminal balance");
  }
  return {status:"PASS",deterministicScenarios:scenarios,payouts,explicitNegativeCases:6,scope:"BigInt accounting model; not EVM execution"};
}
console.log(JSON.stringify(runReference(), null, 2));
