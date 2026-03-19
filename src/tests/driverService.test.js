import driverService from "../services/driverService.js";
import DeliveryDriver from "../models/driver.js";

jest.mock("../models/driver.js");


describe("driverService.create", () => {

  afterEach(() => jest.clearAllMocks());

  it("should create a driver and return the result", async () => {
    const fakeDriver = {
      vehicleType: "car",
      vehicleRegistration: "AB-123-CD",
      userId: "user_001",
      location: { type: "Point", coordinates: [2.3522, 48.8566] }
    };


    DeliveryDriver.create.mockResolvedValue({ _id: "abc123", ...fakeDriver });

    const result = await driverService.create(fakeDriver);

    // Check that .create() was actually called with our input
    expect(DeliveryDriver.create).toHaveBeenCalledWith(fakeDriver);

    // Check the result contains what we expect
    expect(result._id).toBe("abc123w");
    expect(result.vehicleType).toBe("car");
  });

it("should throw if creation fails", async () => {
  DeliveryDriver.create.mockRejectedValue(new Error("DB error"));

  await expect(driverService.create({})).rejects.toThrow("DB error");
});

});

// --- getClosestDriver() ---
describe("driverService.getClosestDriver", () => {

  afterEach(() => jest.clearAllMocks());

  it("should return the closest available driver", async () => {
    const fakeDriver = {
      _id: "driver_001",
      userId: "user_001",
      isAvailable: true,
      distanceMeters: 320,
      location: { type: "Point", coordinates: [2.3522, 48.8566] }
    };


    DeliveryDriver.aggregate.mockResolvedValue([fakeDriver]);

    const result = await driverService.getClosestDriver(48.8566, 2.3522);

    expect(DeliveryDriver.aggregate).toHaveBeenCalled();
    expect(result._id).toBe("driver_001");
    expect(result.isAvailable).toBe(true);
  });

  it("should return null if no driver is found nearby", async () => {

    DeliveryDriver.aggregate.mockResolvedValue([]);

    const result = await driverService.getClosestDriver(48.8566, 2.3522);

    expect(result).toBeNull();
  });

  it("should throw if aggregate fails", async () => {
    DeliveryDriver.aggregate.mockRejectedValue(new Error("Geo error"));

    // getClosestDriver re-throws the error, so we expect the promise to reject
    await expect(
      driverService.getClosestDriver(48.8566, 2.3522)
    ).rejects.toThrow("Geo error");
  });

});
