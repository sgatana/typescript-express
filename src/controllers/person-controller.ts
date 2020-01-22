import { Request, Response } from 'express';
import { IPerson } from '../interfaces';
import { PersonModel } from '../models';

export class PersonController {
  public addNewPersion(req: Request, res: Response) {
    const newPerson: IPerson = new PersonModel({
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

  public listPersons(req: Request, res: Response) {
    PersonModel.find()
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error: 'An Error occured' });
      });
  }
}
