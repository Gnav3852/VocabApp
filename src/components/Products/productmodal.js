import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import Discript from "./descript"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal, Row, Col } from "react-bootstrap"
import  Productmap from './chart'

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  return (
    // <Modal
    //   {...props}
    //   size='lg'
    //   aria-labelledby='contained-modal-title-vcenter'
      
    // >

  
    //   <Modal.Header closeButton>
    //     <Modal.Title id='contained-modal-title-vcenter'>
    //       {props.product.product}
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    <div>
 <Discript product={props.product.product}/>
      {/* <Productmap data={props.product.data}/> */}
    </div>
     
      /* </Modal.Body>
      <Modal.Footer>
       
     
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal> */
  )
}

function Promodal(props) {
  const [formData, setFormData] = useState({
    toggle: false,
  })

  const { toggle } = formData

  const onToggle = (e) => setFormData({ toggle: e })

  const [modalShow, setModalShow] = React.useState(false)
if(modalShow===false){
    return (
        <>
          <Button variant='light' onClick={() => setModalShow(!modalShow)}>
            {props.product.product}
          </Button>
    
      
        </>
      )
} else{
    return (
        <>
          <Button variant='light' onClick={() => setModalShow(true)}>
            {props.product.product}
          </Button>
    
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={props.product}
          />
        </>
      )
}

}

export default Promodal
