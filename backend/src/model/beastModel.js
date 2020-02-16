import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BeastSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    imgURL: {
      type: String,
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

let BeastModel = mongoose.model("beast", BeastSchema);

export default BeastModel;
