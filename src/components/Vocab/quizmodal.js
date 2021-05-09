import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"

import { getWords } from "../../actions/vocab"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal, Row, Col, Container, Form } from "react-bootstrap"
import Quiz from "./quiz/quiz"

// function VerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size='lg'
//       aria-labelledby='contained-modal-title-vcenter'
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id='contained-modal-title-vcenter'>
//           {props.word.word} Quiz
//         </Modal.Title>dadadddwadadaddadwa
//       </Modal.Header>dawdwdww ddw
//       <Modal.Body>dadadadadawdzsd
//         {/* {props.word.quiz.map((ques) => {
//           Object.values(ques).map((key) => {
//             if (Object.keys(key) === "question") {
//                console.log(Object.keys(key))
//             } else {
//               console.log(key)
//             }
//           })

//         })} */}
//          {props.word.quiz.map((ques) => {
//            Object.keys(ques).map((key)=>{
//                console.log(key)
//                console.log(ques[key])
//            })
//         //   Object.keys(ques).map((key) => {
//         //     if (key === "question") {
//         //         console.log(`${props.word.quiz[ques][key]}`)
//         //     } else {
//         //       console.log(key)
//         //     }
//         //   })

//         })}

//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }
class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { object: {} }

    this.counter = 1
  }

  // update(ques) {
  //   if (this.counter2 <= 50) {
  //     const object = this.state.object
  //     object[ques] = {}
  //     this.setState({ object })
  //     console.log(this.state)

  //     this.counter2++
  //   }
  // }

  // updateques(option, ques) {
  //   if (this.counter <= 50) {
  //     const object = this.state.object
  //     if (object[ques]) {
  //       // object[ques][option] = false
  //       // object[ques][option] = false

  //       object[option] = false
  //       this.setState({ object })
  //       console.log(this.state)

  //       this.counter++
  //     } else {
  //       return console.log("das")
  //     }
  //   }
  // }
  render() {
    return (
      <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {this.props.word.word} Quiz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Quiz data={this.props.word['quiz']}aws={this.props.word['aws']}/>
          {/* <Form onSubmit={console.log()}>
            {this.props.word.quiz.map((ques) => {
              return Object.keys(ques).map((key) => {
                if (key === "question") {
                  return <div>{ques[key]}</div>
                } else {
                  {
                    Object.values(ques[key]).map((aw) => {
                      this.update(ques["question"])

                      this.updateques(aw[2], ques["question"])
                    })
                  }
                  return (
                    <div>
                      {Object.keys(ques[key]).map((word) => {
                        // this.update(word[])

                        return (
                          <div>
                            <div
                              onClick={(e) => {
                                if (e.target.id) {
                                  console.log(this.state.object)

                                  const test = this.state.object[e.target.id]

                                  const nottest = !this.state.object[
                                    e.target.id
                                  ]
                                  console.log(test, nottest)
                                  // this.setState({nottest})
                                  console.log(this.state)
                                }
                              }}
                              key={"checkbox"}
                              className='mb-3'
                            >
                              <Form.Check
                                type={"checkbox"}
                                id={ques[key][word][2]}
                              >
                                <Form.Check.Input type={"checkbox"} />
                                <Form.Check.Label>{`${ques[key][word][0]}`}</Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                }
              })
            })}

            <Button type='submit' className='mb-2'>
              Submit
            </Button>
          </Form> */}
        </Modal.Body>

        <Modal.Footer>
          <Button
            type='submit'
            className='mb-2'
            onClick={(e) => {
              console.log(e.target)
            }}
          >
            Submit
          </Button>

          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

function QuizModal(props) {
  const [modalShow, setModalShow] = React.useState(false)

  if (props.word.quiz) {
    return (
      <>
        <Button variant='light' onClick={() => setModalShow(true)}>
          Quiz
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          word={props.word}
        />
      </>
    )
  } else {
    return <div></div>
  }
}

export default QuizModal
