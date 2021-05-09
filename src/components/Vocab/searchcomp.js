import React, { Fragment } from "react"
import axios from "axios"
import {
  DropdownButton,
  Dropdown,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap"

class SearchComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curletter: [], allwords: [], search: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
    //add delay before the loop starts settimeout()
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.words) {
      this.setState({ curletter: [], allwords: [] })

      Object.keys(this.props.words).map((letter) => {
        return (
          <div>
            {this.props.words[letter].map((word) => {
              if (this.state.search != null) {
                //where its non case sensitive
                const word2 = word.word.toLowerCase()
                if (word2.includes(this.state.search.toLowerCase())) {
                  this.state.curletter.push(letter)
                  this.state.allwords.push(word)

                  this.props.getArr(this.state.curletter, this.state.allwords)
                  //   setFormData({
                  //     curletter:([...curletter, letter]),
                  //     allwords: ([...allwords, word2]),

                  //     // curletter: [...curletter, letter],
                  //     // allwords: [...allwords, word2],
                  //   })
                }
              }
            })}
          </div>
        )
      })
    } else {
      return <div>nothing</div>
    }
  }

  render() {
    return (
      // <Row>
      //   <Col>
      //     {" "}
      //     <Form onSubmit={this.handleSubmit}>
      //       <Form.Group controlId='formBasicPassword'>
      //         <Form.Label>Search</Form.Label>
      //         <Form.Control
      //           type='text'
      //           placeholder='Word'
      //           value={this.state.search}
      //           onChange={this.handleChange}
      //         />
      //       </Form.Group>

      //       <Button variant='primary' type='submit'>
      //         Submit
      //       </Button>
      //     </Form>
      //     ‎ ‎‎‎‎‎ ‎
      //   </Col>
      // </Row>
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='align-items-center'>
          <Col xs={11}>
            <Form.Label htmlFor='inlineFormInput' srOnly>
              Name
            </Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              placeholder='Word'
              value={this.state.search}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs='auto'>
            <Button type='submit' className='mb-2'>
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>

      // <form >
      //   <label>
      //    <div className='form-group'>
      //    <input
      //       type='text'
      //       value={this.state.search}
      //       onChange={this.handleChange}
      //     />
      //    </div>

      //   </label>
      //   <input type='submit'  className='btn btn-primary my-1' value='Submit' />
      // </form>
    )
  }
}

export default SearchComp
