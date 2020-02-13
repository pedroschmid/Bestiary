import { BeastController } from "../controller/beastController";

export class BeastRoute {
  beastController = new BeastController();

  routes(app) {
    app
      .route("/beast")
      .get(this.beastController.getBeast)
      .post(this.beastController.createBeast);

    app
      .route("/beast/:creatureName")
      .get(this.beastController.getBeastByParams)
      .put(this.beastController.updateBeastByParams)
      .delete(this.beastController.deleteBeastByParams);
  }
}
