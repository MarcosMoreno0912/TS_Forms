import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import multer from 'multer';
import mysql, { Connection } from 'mysql2/promise';
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'
import { Sequelize } from 'sequelize-typescript'
import { ContactoAyuda } from './models/contactForm.model'

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void ) {
      cb( null, `${Date.now()}-${file.originalname}`);
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 }
}).single('file'));

//enrutador
app.use('/', IndexRoutes);
app.post('/formContact', PostRoutes);

async function connectToDatabase() {
  try {
    const connection = new Sequelize({
      dialect: "mysql",
      host:"127.0.0.1",
      username: "root",
      password: "24DBloperMNM",
      database: "Form_Practice",
      models: [ContactoAyuda]
    });

    await connection.sync({ force: false });

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