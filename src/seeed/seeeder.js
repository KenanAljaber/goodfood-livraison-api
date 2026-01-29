
import driver from "./src/models/driver.js";
export default async()=>{
    
const drivers = [
  {
    vehicleType: "Bike",
    vehicleRegistration: "BIKE-001",
    isAvailable: true,
    location: {
      type: "Point",
      coordinates: [2.3522, 48.8566], // Paris center
    },
    userId: "driver_paris_center",
  },
  {
    vehicleType: "Car",
    vehicleRegistration: "CAR-002",
    isAvailable: true,
    location: {
      type: "Point",
      coordinates: [2.295, 48.8738], // Near Arc de Triomphe
    },
    userId: "driver_arc",
  },
  {
    vehicleType: "Scooter",
    vehicleRegistration: "SCOOT-003",
    isAvailable: true,
    location: {
      type: "Point",
      coordinates: [2.3700, 48.8530], // East Paris
    },
    userId: "driver_east",
  },
];
await driver.insertMany(drivers);
}