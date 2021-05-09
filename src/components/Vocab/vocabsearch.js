import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Container, Row, Col, Button } from "react-bootstrap"
import Vocabmodal from "./Vocabmodal"

const Vocabsearch = ({ words, letters }) => {
  if (words) {
    //string.charAt(0).toUpperCase()
    const newArr = Array.from(new Set(letters[letters.length - 1]))
    return (
      <div>
        {newArr.map((letter) => {
          return (
            <Container fluid>
              <Row>
                <Col xs={1}>
                  {" "}
                  <Button variant='light'>{letter}</Button>
                </Col>
                <Col>
                  {words[words.length - 1].map((word) => {
                    if (word.word.charAt(0).toUpperCase() === letter) {
                      return <Vocabmodal word={word} />
                    } else {
                      return <div></div>
                    }
                  })}
                </Col>
              </Row>
              <Row>
                <Col>‎ ‎‎‎‎‎ ‎</Col>
              </Row>
            </Container>
          )
          //  words[words.length-1].map((word) => {
          //         return <div>{word.word}</div>
          //         })

          //   <Container fluid>
          //   <Row>
          //     <Col xs={1}>
          //       <Button variant='light'>{letter}</Button>
          //     </Col>

          //     <Col>
          //       {words[letter].map((word) => {
          //         return <Vocabmodal word={word} />
          //       })}
          //     </Col>
          //   </Row>
          //   <Row>
          //     <Col>‎ ‎‎‎‎‎ ‎</Col>
          //   </Row>

          // </Container>
        })}
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Vocabsearch
