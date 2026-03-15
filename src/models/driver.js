import mongoose from "mongoose";

const deliveryDriverSchema = new mongoose.Schema(
  {
    vehicleType: { type: String, required: true },
    vehicleRegistration: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },

    location :{
      type: {type: String, enum:["Point"],default:"Point"},
      coordinates:{type:[Number], required:true}
    },
    lastLocationUpdateAt: { type: Date },
    userId: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: false } }
);
deliveryDriverSchema.index({location:"2dsphere"})
export default mongoose.model("DeliveryDriver", deliveryDriverSchema, "DELIVERY_DRIVER");
