import driverService from "../../services/driverService.js";
export default async (req, res) => {

try {
    const driver = await driverService.create(req.body);
    return res.status(201).json(driver);
} catch (error) {
    return res.status(500).json({ error: error.message });

}

}