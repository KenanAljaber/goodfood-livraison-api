import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    status: { type: String, required: true },
    deliveryAddress: { type: String, required: true },

    latitude: { type: Number },
    longitude: { type: Number },

    requestedTime: { type: Date },
    departureTime: { type: Date },
    estimatedArrivalTime: { type: Date },
    actualDeliveryTime: { type: Date },

    distanceKm: { type: Number },
    estimatedDurationMin: { type: Number },

    signatureUrl: { type: String },
    photoProofUrl: { type: String },
    deliveryNotes: { type: String },

    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryDriver" },
  },
  { timestamps: true }
);

export default mongoose.model("Delivery", deliverySchema, "DELIVERY");
