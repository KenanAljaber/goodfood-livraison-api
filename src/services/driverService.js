import DeliveryDriver from "../models/driver.js";
const create = async (driver) => {
  return await DeliveryDriver.create(driver);
};

const getById = async (id) => {
    try {
        return await DeliveryDriver.findById(id);
    } catch (error) {
       throw error
    }
}

const getClosestDriver = async (latitude, longitude) => {
    try {
     
        const [result]= await DeliveryDriver.aggregate([
  {
    $geoNear: {
      key: "location",
      near: { type: "Point", coordinates: [longitude, latitude] }, 
      distanceField: "distanceMeters",
      spherical: true,
      query: { isAvailable: true },
      maxDistance: 5000
    }
  },
  { $limit: 1 }
])

        return result || null;
    } catch (error) {
        console.log(error);
        
        throw error
    }
}
export default { 
    create,
    getClosestDriver
 }