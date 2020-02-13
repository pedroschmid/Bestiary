import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BeastSchema = new Schema(
  {
    creatureName: {
      type: String,
      required: true,
      default: "Anonymous Creature"
    },
    geographicArea: {
      type: String,
      required: true,
      default: "Anonymous Geographic Area"
    },
    description: {
      type: String,
      required: true,
      default: "Anonymous Description"
    },
    behaviorToHumans: {
      type: String,
      required: true,
      default: "Anonymous Behavior"
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
