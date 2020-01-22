import express from 'express';
import { Routes } from './routes';
import mongoose from 'mongoose';

class App {
  public app: express.Application;
  public routes: Routes = new Routes();
  public mongoUrl: string =
    'mongodb+srv://admin:admin@cluster0-xmgzw.mongodb.net/test?retryWrites=true&w=majority';

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.mongoSetUp();
  }

  private config(): void {
    this.app.use(express.json());
  }
  private mongoSetUp(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().app;
