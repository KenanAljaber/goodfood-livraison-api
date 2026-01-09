import mongoose from "mongoose";

const deliveryDriverSchema = new mongoose.Schema(
  {
    vehicleType: { type: String, required: true },
    vehicleRegistration: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },

    currentLatitude: { type: Number },
    currentLongitude: { type: Number },
    lastLocationUpdateAt: { type: Date },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: false } }
);

export default mongoose.model("DeliveryDriver", deliveryDriverSchema, "DELIVERY_DRIVER");
