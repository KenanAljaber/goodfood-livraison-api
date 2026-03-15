import mongoose from "mongoose";

const deliveryTrackingSchema = new mongoose.Schema(
  {
    deliveryId: { type: mongoose.Schema.Types.ObjectId, ref: "Delivery", required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    recordedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

deliveryTrackingSchema.index({ deliveryId: 1 });

export default mongoose.model("DeliveryTracking", deliveryTrackingSchema, "DELIVERY_TRACKING");
