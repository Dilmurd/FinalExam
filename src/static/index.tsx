export interface CartItem {
    id: number
    name: string
    size: string
    color: string
    price: number
    quantity: number
    image: string
  }
  
  export interface OrderSummary {
    subtotal: number
    discount: number
    deliveryFee: number
    total: number
  }
  
  