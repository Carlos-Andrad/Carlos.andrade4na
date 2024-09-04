import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://carlos4na_user:w9SQAXYahdaxUFBpV2EjFneUIJanpbgi@dpg-cr7qs3d6l47c73bq6a8g-a.oregon-postgres.render.com/carlos4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
