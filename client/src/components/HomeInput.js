import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { addTransaction } from './../app state/tranSlice'


class HomeInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      expense: 0,
      date: moment().format('Do MMMM YYYY')
    }

    this.inputbarRef = React.createRef()
  }

  handleOnEnter(e) {
    e.preventDefault()

    let text = this.inputbarRef.current.value

    if (text.length === 0 || e.keyCode !== 13) {
      return
    }

    if (this.state.item === '') {
      this.setState({ item: text }, () => {
        this.inputbarRef.current.value = ''
        this.inputbarRef.current.placeholder = `How much did the ${this.state.item} cost ?`

        document.querySelector('#Subtext #Cancel').style.opacity = 1
      })
    } else if (isNaN(text)) {
      this.inputbarRef.current.value = ''
      this.inputbarRef.current.placeholder = 'Please enter a number'
    } else {
      this.setState({ expense: Number(text) }, () => {
        const { dispatch } = this.props
        dispatch(addTransaction(this.state))
        this.reset()
      })
    }
  }

  reset() {
    this.setState({
      item: '',
      expense: 0
    }, () => {
      document.querySelector('#Subtext #Cancel').style.opacity = 0

      let inputbar = this.inputbarRef.current
      inputbar.value = ''
      inputbar.placeholder = 'What did you buy ?'
    })
  }

  render() {
    return (
      <div className='HomeInput'>
        <div className='field'>
          <div className='control'>
            <input
              id='Inputbar'
              ref={this.inputbarRef}
              className='input is-rounded is-large custom-input'
              type='text'
              placeholder='What did you buy ?'
              onKeyUp={(e) => this.handleOnEnter(e)}
              autoFocus />
          </div>
        </div>
        <div id='Subtext'>
          <span id='Cancel' onClick={() => this.reset()}>Cancel</span>
        </div>
      </div>
    )
  }
}

export default connect()(HomeInput)

