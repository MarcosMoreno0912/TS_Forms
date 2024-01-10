import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql, { Connection } from 'mysql2/promise';

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

async function connectToDatabase() {
  try {
    const connection: Connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '24DBloperMNM',
      database: 'Form_Practice',
    });

    console.log('Conexión exitosa a la base de datos');

    return connection;
  } catch (error: any) {
    console.error('Error al conectar a la base de datos:', error.message);
    throw error;
  }
}

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor backend en puerto ${PORT}, OK`);
    });
  })
  .catch((error) => {
    console.error('No se puede iniciar el servidor debido a un error en la conexión a la base de datos.');
  });