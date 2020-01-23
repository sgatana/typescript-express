import { Router } from 'express';
import { PersonController } from '../controllers';

export class Routes {
  public personController: PersonController = new PersonController();
  public routes(app: Router): void {
    // get endpoints
    app.route('/').get(this.personController.listPersons);
    app.route('/:id').get(this.personController.getPerson);

    // post endpoints
    app.route('/').post(this.personController.addNewPersion);
  }
}
