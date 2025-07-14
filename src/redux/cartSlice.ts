import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index >= 0) {
        state.items[index].quantity += 1
      } else {
        state.items.push(action.payload)
      }
    },
  decreaseQuantity: (state, action: PayloadAction<string>) => {
  const index = state.items.findIndex(item => item.id === action.payload)
  if (index >= 0) {
    const currentItem = state.items[index]
    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1
    } else {
      // ✅ Remove item if quantity is 1 and user tries to decrease
      state.items.splice(index, 1)
    }
  }
},
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer