import React, { Component } from "react"
import axios from "axios"
import { Button, Modal, Row, Col } from "react-bootstrap"

class Descript extends Component {
  state = {
    product: {},
    toggle: false,
  }
  onToggle = (e) => this.setState({ toggle: e })
  componentWillMount() {
    axios.get(`/${this.props.product}.json`).then((res) => {
        console.log(res.data)
      this.setState({ product: res.data })
    })
  }
  render() {
    return this.state.toggle === false ? (
      <div>
        <p>{this.state.product.shortDesc}</p>
        <Button onClick={() => this.onToggle(!this.state.toggle)}>
          Show More
        </Button>
      </div>
    ) : (
      <div>
        <p>{this.state.product.longDesc}</p>
        <Button onClick={() => this.onToggle(!this.state.toggle)}>
          Show Less
        </Button>
      </div>
    )
  }
}

export default Descript
