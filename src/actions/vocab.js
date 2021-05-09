import { GET_WORDS, WORDS_FAIL } from "./types"
import axios from "axios"

export const getWords = () => async (dispatch) => {
  try {
    const res = await axios.get("/output.json")
    dispatch({
      type: GET_WORDS,
      payload: res.data,
    })
  } catch (err) {
   console.log(err)
  }
}