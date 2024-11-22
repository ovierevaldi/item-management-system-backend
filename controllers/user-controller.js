class UserController {
    static async createUser(req, res){
        const userData = req.body;
        
        res.status(200).json({message: 'success'})
    }
}

export default UserController;