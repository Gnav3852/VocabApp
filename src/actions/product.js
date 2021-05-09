import { GET_PRODUCTS, WORDS_FAIL } from "./types"
import axios from "axios"

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/product.json")

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    })
    
  } catch (err) {
    console.log(err)
  }
}
