import React, { Fragment, createRef } from "react"
import axios from "axios"
import { DropdownButton, Dropdown,Row,Col } from "react-bootstrap"
import { getWords } from "../../actions/vocab"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Vocabsearch from "./vocabsearch"
import SearchComp from "./searchcomp"
import Vocabmain from "./vocabmain"
import Pagea from "./pagniation"

class Vocab extends React.Component {
  state = { curletter: [], allwords: [], search: false, words: [] }
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.getArr = this.getArr.bind(this)
  }

  getData = async (word) => {
    await this.setState({ words:word })
  }

  getArr = async (letter, alwords) => {
    await this.state.curletter.push(letter)
    console.log('letter',this.state.curletter)
    await this.state.allwords.push(alwords)
    console.log('all',this.state.allwords)
    await this.setState({ search: true })
  }

  render() {
    return this.state.search === false ? (
      <div>
         <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
          <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <Pagea words={this.state.words}/>
        <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
          <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <SearchComp words={this.state.words} getArr={this.getArr} />
        <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <Vocabmain getData={this.getData} />
      </div>
    ) : (
      <div>
         <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
          <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <Pagea words={this.state.words}/>
        <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <SearchComp words={this.state.words} getArr={this.getArr} />
        <Row>
            <Col>‎ ‎‎‎‎‎ ‎</Col>
          </Row>
        <Vocabsearch
          words={this.state.allwords}
          letters={this.state.curletter}
        />
      </div>
    )

    // return (
    //   <div>
    //     <SearchComp words={this.state.words} getArr={this.getArr} />
    //     <Vocabmain getData={this.getData} />
    //   </div>
    // )
  }
}

Vocab.propTypes = {
  getWords: PropTypes.func.isRequired,
  vocab: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { vocab: state.vocab }
}

export default connect(mapStateToProps, { getWords })(Vocab)
