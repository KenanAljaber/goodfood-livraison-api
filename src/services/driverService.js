import DeliveryDriver from "../Models/deliveryDriver.js";
const create = async (driver) => {
    try {
        return await DeliveryDriver.create(driver);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


export default { 
    create
 }