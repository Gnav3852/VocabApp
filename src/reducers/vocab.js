import { GET_WORDS, WORDS_FAIL } from "../actions/types"

const initalState = {
  words: null,
  loading: true,
  error: {},
}

export default function (state = initalState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_WORDS:
      return {
        ...state,
        words: payload,
        loading: false,
      }

    case WORDS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
