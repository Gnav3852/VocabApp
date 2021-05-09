import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"

import { getWords } from "../../actions/vocab"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal, Row, Col } from "react-bootstrap"
import QuizModal from './quizmodal'


function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  return toggle === false ? (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.word.word}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.word.shortDesc}</p>
        <Button onClick={() => onToggle(!toggle)}>Show More</Button>
      </Modal.Body>
      <Modal.Footer>
        <QuizModal word={props.word}/>
        <Button onClick={() => window.location.assign(`${props.word.url}`)}>
          Link for more details
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.word.word}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.word.longDesc}</p>
        <Button onClick={() => onToggle(!toggle)}>Show Less</Button>
      </Modal.Body>
      <Modal.Footer>
      <QuizModal word={props.word}/>
        <Button onClick={() => window.location.assign(`${props.word.url}`)}>
          Link for more details
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function Vocabmodal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant='light' onClick={() => setModalShow(true)}>
        {props.word.word}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        word={props.word}
      />
    </>
  )
}

export default Vocabmodal
