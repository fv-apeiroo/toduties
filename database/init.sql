DO $$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE rolname = 'todutiesuser') THEN

      CREATE ROLE todutiesuser WITH LOGIN PASSWORD 'todutiespassword';
   END IF;
END
$$;

\c todutiesdb

CREATE TABLE duty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

GRANT SELECT, INSERT, UPDATE ON TABLE duty TO todutiesuser;