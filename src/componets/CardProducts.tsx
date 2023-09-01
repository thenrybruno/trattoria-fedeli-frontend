import Image from "next/image"
import { useCommand } from "../hooks/useMenu"
import { ProductType } from "../services/products"
import React from "react"


type CardProductsProps = {
    product: ProductType
}

const CardProduct: React.FC<CardProductsProps> = ({ product }) =>{
    const { name, details, price, imageUrl } = product
    const {addProduct} = useCommand()

    return(
        <div>
            <Image src={imageUrl} alt={name} width={180} height={180}/>
            <h3>{name}</h3>
            <p>{details}</p>
            <p>{price}</p>
            <button>Adicionar</button>
        </div>
    )
}

export default CardProduct