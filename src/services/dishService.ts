import api from "./api";

export type DishType  =   {
    id: number,
    name: string,
    details: string,
    vegetarian: boolean,
    price: number,
    imageUrl: string,
}

const token = sessionStorage.getItem('user-token')


const dishService =   {
    /*Filtrar por pratos vegetarianos*/
    getVegetarianDishes: async () => {
        const response = await api.get('/dishes/vegetarians', {
            headers:    {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error)    =>  {
            return error.response
        })
        return response
    },

    /*Pesquisar por nome*/
    getSearch:  async   (name: string)  =>  {
        const response = await api.get(`/dishes/search?name=${name}`, {
            headers:    {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)    =>  {
            return error.response
        })

        return response
    }
}

export default dishService
