'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components'

import { useCart } from '@/contexts/CartProvider'

import { IProduct } from '@/@types/store'

interface IAddProductToCart {
  productData: IProduct
}

const AddProductToCart = ({ productData }: IAddProductToCart) => {
  const { handleAddProductToCart } = useCart()

  const [addingProductToCart, setAddingProductToCart] = useState(false)

  const handleBuyProduct = (product: IProduct) => {
    setAddingProductToCart(true)
    setTimeout(() => {
      handleAddProductToCart(product)
      setAddingProductToCart(false)
    }, 2000)
  }

  return (
    <Button
      label="Comprar"
      icon={
        <Image
          src="/shopping-bag.svg"
          alt="Ícone do Botão de Compra"
          width={16}
          height={16}
        />
      }
      loading={addingProductToCart}
      onClick={() => handleBuyProduct(productData)}
    />
  )
}

export default AddProductToCart
