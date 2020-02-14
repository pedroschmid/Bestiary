import { BeastController } from "../controller/beastController";

export class BeastRoute {
  beastController = new BeastController();

  routes(app) {
    app
      .route("/beast")
      .get(this.beastController.getAll)
      .post(this.beastController.create);

    app
      .route("/beast/:name")
      .get(this.beastController.getByParams)
      .put(this.beastController.updateByParams)
      .delete(this.beastController.deleteByParams);
  }
}
