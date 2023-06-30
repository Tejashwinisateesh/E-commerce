import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //         storeData:(state,actions)=>{ //reducer function
    // return {...state,...actions.payload}
    //         },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    increase: (state, action) => {
      let itemId = action.payload;
      let itemIndex = state.cart.findIndex((item) => item.product_No == itemId);

      state.cart[itemIndex]["quantity"] =
        parseInt(state.cart[itemIndex]["quantity"]) + 1;

      return state;
    },
    decrease: (state, action) => {
      let itemsId = action.payload;
      let itemsIndex = state.cart.findIndex(
        (item) => item.product_No == itemsId
      );

      state.cart[itemsIndex]["quantity"] =
        parseInt(state.cart[itemsIndex]["quantity"]) - 1;

      return state;
    },

    removeProduct: (state, action) => {
      let removeItem = action.payload;
      let removeIndex = state.cart.findIndex(
        (item) => item.product_No == removeItem
      );

      if (removeIndex !== -1) {
        state.cart.splice(removeIndex, 1);
      }
    },
    // var temp=state.cart.push(actions.payload)
    // return {state,...{cart:state.cart.push(actions.payload)}
    //     }
  },
});

export const { addToCart, removeProduct, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
