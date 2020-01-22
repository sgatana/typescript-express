import { Request, Response, Router } from 'express';
import { PersonController } from '../controllers';

export class Routes {
  public personController: PersonController = new PersonController();
  public routes(app: Router): void {
    app.route('/').get(this.personController.listPersons);

    app.route('/').post(this.personController.addNewPersion);
  }
}
