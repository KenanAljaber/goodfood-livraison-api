export default class ApiRespopnse{



    static success(res, data=null,message="success",status=200) {
        return res.status(status).json({
            success: true,
            message: message,
            data: data
        });
    }  

    static errror(res, error=null,message="error",status=500) {
         message = error.message ? error.message : error;
        const data = {
            success: false,
            message: message,
            error: message
        };
        return res.status(500).json(data);
    }
}