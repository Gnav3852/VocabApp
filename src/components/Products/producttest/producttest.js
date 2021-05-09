import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom"
import PropTypes from "prop-types"
import { Button, Modal, Row, Col, Container, Form } from "react-bootstrap"
import { getProducts } from "../../../actions/product"
import { connect } from "react-redux"

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

function QueryParamsExample({ getProducts, product: { products } }) {
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <Router>
      <QueryParamsDemo products={products} />
    </Router>
  )
}
QueryParamsExample.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  product: state.product,
})

export default connect(mapStateToProps, { getProducts })(QueryParamsExample)

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const QueryParamsDemo = (props) => {
  let query = useQuery()
  // useEffect(() => {
  //   getProducts()
  // }, [getProducts])
  if (props.products) {
    return (
      <div>
        <div>
          <h2>Accounts</h2>
          <ul>
            {props.products.map((product) => {
              return (
                <li>
                  <Link to={`/?name=${product.product}`}>
                    <Button
                      onClick={() => {
                        console.log(query.get("name"))
                      }}
                    >
                      {product.product}
                    </Button>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link to='/account?name=netflix'>Netflix</Link>
            </li>
            <li>
              <Link to='/account?name=zillow-group'>Zillow Group</Link>
            </li>
            <li>
              <Link to='/account?name=yahoo'>Yahoo</Link>
            </li>
            <li>
              <Link to='/account?name=modus-create'>Modus Create</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              console.log(props.products)
            }}
          ></button>
          <Child name={query.get("name")} />
        </div>
      </div>
    )
  } else {
    return <div>das</div>
  }
}
// QueryParamsDemo.propTypes = {
//   getProducts: PropTypes.func.isRequired,
//   product: PropTypes.object.isRequired,
// }

// const mapStateToProps = (state) => ({
//   product: state.product,
// })

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  )
}
