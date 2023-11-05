import pkg from "pg";
const { Client } = pkg;
const obtenerTiendas = async () => {
  const client = new Client({
    user: "fl0user",
    host: "ep-red-cake-06833267.us-east-2.aws.neon.fl0.io",
    database: "Ecommerce",
    password: "7OqrhkzuMZQ5",
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();

  const res = await client.query("select * from tbtiendas");

  const result = res.rows;
  await client.end();

  return result;
};

obtenerTiendas().then((result) => {
  console.log(result);
});
