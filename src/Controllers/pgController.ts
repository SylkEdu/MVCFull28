import User from '../Models/userModelPG'


 const  Functions:any = {

    async getUserByEmail(emailReq:any): Promise<any>{
        try {
            const user = User.User.findAll({
                where: {
                    email: emailReq
                }
            });
        
            return user
        } catch (error) {
            return error
        }
    },

    async login(body:any): Promise<any>{
        try {
            const user = User.User.findAll({
                where: {
                    email: body.email,
                    password: body.password
                }
            });
        
            return user
        } catch (error) {
            return error
        }
    },

    async selectUsers(): Promise<any>{
        try {
            const user = User.User.findAll();
        
            return user
        } catch (error) {
            return error
        }
    },

    async createUser(body:any): Promise<any>{
        try {
            const signup = User.User.create({
                name: body.name,
                cpf: body.cpf,
                email: body.email,
                password: body.password,
                usertype: body.usertype
            });

            return signup
        } catch (error) {
            return error
        }

    }

    // async function createUser( req: any){
    //     try {
            
    //        /* if(req.name == null){ return "nome nulo"}
    //         if(req.cpf == null){ return "cpf nulo"}
    //         if(req.email == null){ return "email nulo"}*/    
    
            
    
    //         const user = User.User.create({ 
    //             name: req.name, 
    //             email: req.email, 
    //             cpf: req.cpf, 
    //             password: req.password, 
    //             usertype: req.usertype
    //         },(err)=>{return err});
            
    //         console.log(user)
    
    //     } catch (error) {
    //        return "Erro: "+error.message
    //     }
        
    // }
}
 
export default {Functions}
