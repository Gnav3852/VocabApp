import React, { Component } from "react"
import Discript from "../descript"
import Productmap from "../chart"
import PropTypes from "prop-types"
import { getProducts } from "../../../actions/product"
import { connect } from "react-redux"
import axios from "axios"

import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Dec = async () => {
  let query = useQuery()
//   await axios.get(`/${this.props.product}.json`).then((res) => {
//     return res.data
//   })
  return (
    <div>
      ds
      <button
        onClick={() => {
          console.log()
        }}
      >
        bt
      </button>
      <Discript product={query.get("name")} />
      {/* <Productmap product={query.get("name")} thedata={data} /> */}
    </div>
  )
}

export default Dec
