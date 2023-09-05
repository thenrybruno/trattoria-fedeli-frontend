export type ProductType = {
    id: number
    name: string
    details: string
    vegetarian: boolean
    price: number
    imageUrl: string
    category: string
}

export const fetchProducts = async () => {
    const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`).then(
        (res) => res.json()
    )
    return products
}
