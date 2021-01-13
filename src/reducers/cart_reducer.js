import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      let tempItem = state.cart.find((i) => i.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return {...cartItem, amount: newAmount}
          }
          else {
            return cartItem
          }
        })
        return {...state, cart: tempCart}
      } else {
        let newItem = {
          id: id + color,
          amount: amount,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          max: product.stock
        };
        return {...state, cart:[...state.cart, newItem]}
      }
    case REMOVE_CART_ITEM:
      let tempCart = state.cart.filter((c) => c.id !== action.payload.id)
      return { ...state, cart: tempCart }
    case CLEAR_CART:
      return {...state, cart:[]};
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: i, value } = action.payload
      let tmpCart = state.cart.map((item) => {
        if (item.id === i) {
          if (value === 'inc') {
            item.amount = item.amount + 1;
            if (item.amount > item.max) {
              item.amount = item.max
            }
          }
          if (value === 'dec') {
            item.amount = item.amount - 1;
            if (item.amount < 1) {
              item.amount = 1
            }
          }
        }
        return item
      });
      return { ...state, cart: tmpCart };
    case COUNT_CART_TOTALS:
      const { total_amount, total_items } = state.cart.reduce((total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount
        total.total_amount += amount * price
        return total
      },
      {total_amount:0, total_items:0})
      return {...state, total_amount, total_items}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
