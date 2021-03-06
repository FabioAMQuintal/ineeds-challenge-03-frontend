import axios from "axios";
import config from '../../config/index';

class Auth {

    async login(email: string, password: string){
        try{
            const response = await axios.post(config.api.baseUrlLocal.concat(config.api.employer, 'login'),{
                email,
                password
            });

            if(response.data.JWTtoken){
                localStorage.setItem("user", JSON.stringify(response.data));
                return Promise.resolve(response.data);
            } else {
                return Promise.reject(response.data.error)
            }
        } catch(e) {
            return e;
        }
    }

    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser(){
        const user = localStorage.getItem("user");
        if(user){
            return JSON.parse(user)
         } 
         return null
    }
}

export default new Auth();