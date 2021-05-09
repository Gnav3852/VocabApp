import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import { getWords } from "../../actions/vocab"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal, Col, Row, Container } from "react-bootstrap"
import Vocabmodal from "./Vocabmodal"
import Popup from "reactjs-popup"


const Vocabmain = ({ getWords, vocab: { words }, getData }) => {
  useEffect(() => {
    getWords()
  }, [getWords])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  if (words) {
    getData(words)
    return Object.keys(words).map((letter) => {
      return (
      

        <Container>
          <Row>

            <Col>
            <Button variant='light'>{letter}</Button>
            </Col>
          
          {words[letter].map((word) => {
            return (
              <>
              <Col>
                    <Vocabmodal word={word} />
              </Col>
              </>
          
            )
          })}

          </Row>
        </Container>
      )
    })
  } else {
    return <div>Loading</div>
  }
}

Vocabmain.propTypes = {
  getWords: PropTypes.func.isRequired,
  vocab: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  vocab: state.vocab,
})

export default connect(mapStateToProps, { getWords })(Vocabmain)
