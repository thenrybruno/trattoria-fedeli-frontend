export type ProductType = {
    id: number
    name: string
    details: string
    vegetarian: boolean
    price: number
    imageUrl: string
}

export const fetchProducts = async () => {
    const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`).then(res => res.json())
    return products
}