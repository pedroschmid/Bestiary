import BeastModel from "../model/beastModel";

export class BeastController {
  // GET ALL
  async getBeast(request, response, next) {
    try {
      await BeastModel.find({})
        .then(result => {
          response.json(result);
        })
        .catch(error => {
          console.error(error);
        });
    } finally {
      next();
    }
  }

  // GET BY PARAMS
  async getBeastByParams(request, response, next) {
    let params = { name: request.params.creatureName };

    try {
      await BeastModel.findOne(params)
        .then(result => {
          response.json(result);
        })
        .catch(error => {
          console.error(error);
        });
    } finally {
      next();
    }
  }

  // CREATE
  async createBeast(request, response, next) {
    let newBeast = new BeastModel(request.body);

    try {
      await newBeast
        .save()
        .then(result => {
          response.send(`BEAST CREATED SUCCESSFULLY!\n${result}`);
        })
        .catch(error => {
          console.error(error);
        });
    } finally {
      next();
    }
  }

  // UPDATE BY PARAMS
  async updateBeastByParams(request, response, next) {
    let params = { name: request.params.creatureName };
    let data = request.body;

    try {
      await BeastModel.findOneAndUpdate(params, data, { new: true })
        .then(result => {
          response.send(`BEAST UPDATED SUCCESSFULLY!\n${result}`);
        })
        .catch(error => {
          console.error(error);
        });
    } finally {
      next();
    }
  }

  async deleteBeastByParams(request, response, next) {
    let params = { name: request.params.creatureName };

    try {
      await BeastModel.findOneAndDelete(params)
        .then(result => {
          response.send(`BEAST DELETED SUCCESSFULLY!\n${result}`);
        })
        .catch(error => {
          console.error(error);
        });
    } finally {
      next();
    }
  }
}
