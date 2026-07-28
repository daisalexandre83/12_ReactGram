import {api,requestConfig} from '../utils/config'

//Register an user
const register = async(data) =>{

    const config = requestConfig("POST",data)

    try {
        const res = await fetch(api + "/users/register",config)
        .then((res) =>res.json())
        .catch((err) => ({ errors: [err.message || "Falha na conexão com o servidor"] }));

    if (res._id) {
    localStorage.setItem("user",JSON.stringify(res));
    } 
    
    return res;
    } catch (error) {
        console.log(error);
        return { errors: [error.message || "Falha na conexão com o servidor"] };
    }
};

// Logout an user
const logout = () =>{
    localStorage.removeItem("user");
};

// Sign in an user
const login =  async(data) =>{

    const config = requestConfig("POST",data)

    try {
        
      const res = await fetch(api + "/users/login",config) 
                    .then((res) => res.json())
                    .catch((err) => ({ errors: [err.message || "Falha na conexão com o servidor"] }));

                    

       if (res._id) {
        localStorage.setItem("user",JSON.stringify(res));
       }  
       
       return res;
    } catch (error) {
      console.log(error);
      return { errors: [error.message || "Falha na conexão com o servidor"] };
    }
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
