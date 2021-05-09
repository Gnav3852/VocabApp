import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"

import { getWords } from "../../actions/vocab"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal } from "react-bootstrap"
import Vocabmodal from "./Vocabmodal"

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.letter}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.words[props.letter].map((word) => {
          return <Vocabmodal word={word} />
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function Pagmodal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant='light' onClick={() => setModalShow(true)}>
        {props.letter}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        letter={props.letter}
        words={props.words}
      />
    </>
  )
}

export default Pagmodal
