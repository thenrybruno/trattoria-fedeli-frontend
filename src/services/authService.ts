import api from "./api"

interface RegisterParams    {
    firstName:  string
    lastName:   string
    email:      string
    password:   string
}

interface LoginParams {
    email: string
    password: string
}

const authenticationService   =   {
    /*Registrar um novo usuário*/
    register: async (params: RegisterParams)  =>  {
        const response  =   await api.post('/auth/register', params).catch((error)  =>  {
            if  (error.response.status  === 400) return error.response
            return error
        })
        
        return response
    },
    
    /*Logar com usuário já cadastrado*/
    login: async (params: LoginParams) => {
        const response = await api.post("/auth/login", params).catch((error) =>  {

            if (error.response.status === 400 || error.response.status === 401) {
                return error.response
            }
                return error
        })

        if (response.status === 200) {
            sessionStorage.setItem("user-token", response.data.token)
        }

        return response
    }
}

export default authenticationService