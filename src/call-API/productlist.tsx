import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface StyleProduct {
  id?: number;
  name: string;
  expiredAt: string;
  author: string;
  description: string;
}
const initialState: StyleProduct[] = [];
export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<StyleProduct>) => {
      const product = action.payload;
      state.push(product);
      return state;
    },
  },
});
export const { addToCart } = productListSlice.actions;
export default productListSlice.reducer;
