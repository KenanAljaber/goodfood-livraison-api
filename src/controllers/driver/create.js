import driverService from "../../services/driverService.js";
import ApiRespopnse from "../../utils/ApiResponse.js";
export default async (req, res) => {

try {
    const driver = await driverService.create(req.body);
    return ApiRespopnse.success(res, driver);
} catch (error) {
    return ApiRespopnse.errror(res, error); 

}

}