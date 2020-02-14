import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BeastSchema = new Schema(
  {
    creatureName: {
      type: String,
      required: true,
      unique: true,
      default: "?"
    },
    geographicArea: {
      type: String,
      required: true,
      default: "?"
    },
    description: {
      type: String,
      required: true,
      default: "?"
    },
    behaviorToHumans: {
      type: String,
      required: true,
      default: "?"
    },
    isMagical: {
      type: Boolean,
      required: true,
      default: false
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
