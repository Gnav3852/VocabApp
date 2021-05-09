import React, { Fragment } from "react"
import axios from "axios"
import {
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Pagmodal from './pagmodal'


class Pagea extends React.Component {
  state = {
    letters: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    vaLetter: [],
  }
  constructor(props) {
    super(props)
  }

  render() {
    Object.keys(this.props.words).map((letter) => {
      this.state.vaLetter.push(letter)
    })
    return (
      <Container>
        <Row>
          {this.state.letters.map((letter) => {
            if (this.state.vaLetter.includes(letter)) {
              return (
                <Col>
                 <Pagmodal letter={letter} words={this.props.words}/>
                </Col>
              )
            } else {
              return (
                <Col>
                  <Button variant="light" disabled >{letter}</Button>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    )
  }
}

export default Pagea
