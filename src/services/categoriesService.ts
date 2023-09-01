import api from "./api";
import { DishType } from "./dishService";

export type CategoryType    =   {
    id: number
    name: string
    description: string
    position: number
    dishes?: DishType[]
}

const token = sessionStorage.getItem('user-token')

const categoriesService =   {
    getCategories: async () =>  {
        const response = await api.get('/categories',   {
            headers:    {
                Authorization: `Bearer: ${token}`
            }
        }).catch((error)    =>  {
            return error.response
        })

        return response
    },

    getDishes: async (id: number)   =>  {
        const response = await api.get(`/categories/${id}`, {
            headers:    {
                Authorization: `Bearer: ${token}`
            }
        }).catch((error)    =>  {
            return error.response
        })

        return response
    }
}

export default categoriesService