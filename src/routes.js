import delivery from "./controllers/delivery/deliveryController.js";
import deliveryDriiver from "./controllers/driver/driverController.js";
import deliveryTracing from "./controllers/tracking/trackingController.js";
export default (router) => {
    
    router.use("/", delivery);
    router.use("/delivery-driver", deliveryDriiver);
    router.use("/", deliveryTracing);
}