import { GET_PRODUCTS, PRODUCT_FAIL } from "../actions/types"

const initalState = {
  products: null,
  loading: true,
  error: {},
}

export default function (state = initalState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      }

    case PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
