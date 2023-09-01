'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { ProductType } from "../services/products"


type MenuContextType ={
    command: ProductType[]
    addProduct: (product: ProductType) => void
    removeProduct: (productId: number) => void
}

const CommandContext = createContext<MenuContextType>({} as MenuContextType)

export const CommandContextProvider = (props: {
    children?: ReactNode
}) =>{
    const [command, setCommand] = useState<ProductType[]>([])

    useEffect(() =>{
        const storedCommand = localStorage.getItem('commands')

        if(storedCommand){
            setCommand(JSON.parse(storedCommand))
        }
    }, [])

    const addProduct = (product: ProductType) =>{
        const updateCommand = [...command, product]
        localStorage.setItem('commands', JSON.stringify(updateCommand))
        setCommand(updateCommand)
    }

    const removeProduct = (productId: number) =>{
        const productIndex = command.findIndex(product => product.id === productId)

        if(productIndex !== -1){
            const updatedCommand = [...command]
            updatedCommand.splice(productIndex, 1)
            localStorage.setItem('commands', JSON.stringify(updatedCommand))
            setCommand(updatedCommand)
        }
    }

    return(
        <CommandContext.Provider
            value={{command, addProduct, removeProduct}}
        >
            {props.children}
        </CommandContext.Provider>
    )
}

export const useCommand = () => useContext(CommandContext)