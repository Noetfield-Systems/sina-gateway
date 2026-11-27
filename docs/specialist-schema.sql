-- Additive only, existing Gateway database; no cross-venture customer data.
CREATE TABLE IF NOT EXISTS specialist_cases (
 scope text NOT NULL, slug text NOT NULL, rank integer NOT NULL DEFAULT 100,
 visibility text NOT NULL DEFAULT 'owner_draft' CHECK (visibility IN ('owner_draft','approved')),
 approval_ref text, payload jsonb NOT NULL, PRIMARY KEY(scope,slug),
 CHECK (visibility <> 'approved' OR (approval_ref IS NOT NULL AND length(trim(approval_ref))>0))
);
CREATE TABLE IF NOT EXISTS specialist_grants (
 token_hash text PRIMARY KEY CHECK (token_hash ~ '^[a-f0-9]{64}$'),
 scope text NOT NULL, audience text NOT NULL CHECK(audience IN ('owner','specialist')),
 allowed_slugs text[] NOT NULL DEFAULT '{}',
 expires_at timestamptz NOT NULL, revoked_at timestamptz,
 CHECK(audience='owner' OR cardinality(allowed_slugs)>0)
);
