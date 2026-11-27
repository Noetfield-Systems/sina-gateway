export const categories=['investment','enterprise','partnership','development','co-building','introduction'];
export function validateInquiry(x){
if(!x||typeof x!=='object'||Array.isArray(x)||x.website||x.consent!=='on'||!categories.includes(x.category))return null;
const str=(v,max,min=0)=>typeof v==='string'&&v.trim().length>=min&&v.trim().length<=max?v.trim():null;
const name=str(x.name,120,1),email=str(x.email,254,3),organization=str(x.organization??'',160),message=str(x.message,2000,20);
if(!name||!email||!message||organization===null||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return null;
return {category:x.category,name,email:email.toLowerCase(),organization,message};
}