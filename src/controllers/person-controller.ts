import { Request, Response } from 'express';
import { IPerson } from '../interfaces';
import { PersonModel } from '../models';
import mongoose from 'mongoose';

export class PersonController {
  public addNewPersion(req: Request, res: Response) {
    const newPerson: IPerson = new PersonModel({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    });
    newPerson
      .save()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ error: `An error occured ${err.message}` });
      });
  }

  public async listPersons(req: Request, res: Response) {
    try {
      const users = await PersonModel.find();
      return res.json(users);
    } catch (error) {
      res.json({ error: `An Error occured ${error.message}` });
    }
  }
  async getPerson(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const person = await PersonModel.findById(id);
      res.status(200).json(person);
    } catch (error) {
      console.log(error);
      res.json({ error: error.messageP });
    }
  }
}
