
/*
* Jwt authentication
*
* */

class AuthController{
    authentication(req, res){
        res.send("Express work OK")
    }
}

module.exports = new AuthController()