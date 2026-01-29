import driverService from "../../services/driverService.js";
import ApiRespopnse from "../../utils/ApiResponse.js";
export default async (req, res) => {

    try {

        let { lat, lng } = req.query;
        if (!lat || !lng) throw new Error("Les corrdinates de livreur sont obligatoires!");
        lat = Number.parseFloat(lat)
        lng = Number.parseFloat(lng)

        if (Number.isNaN(lat) || Number.isNaN(lng)) {
            return res.status(400).json({ error: "Invalid coordinates" });
        }

        console.log(`the corrdinates are ${lat} ${lng}`);

        const driver = await driverService.getClosestDriver(lat, lng);
        return ApiRespopnse.success(res, driver);
    } catch (error) {
        return ApiRespopnse.errror(res, error);

    }

}