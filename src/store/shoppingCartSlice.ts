import { createReducer } from "@reduxjs/toolkit";
import { initalProductList } from "@/constants/product";
import { IProductItem } from "@/types/product";

interface ShoppingCartState {
  productList: IProductItem[]
}
;
const initalState: ShoppingCartState = {
  productList: initalProductList
}

const shoppingCartReducer = createReducer(initalState, (builder) => {

}) 


export default shoppingCartReducer