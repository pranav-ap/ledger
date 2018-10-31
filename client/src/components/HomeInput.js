import React, { Component } from 'react'

class HomeInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      cash: 0,
      comment: ''
    }
  }

  handleOnEnter(e) {
    e.preventDefault()

    let inputbar = document.getElementById('Inputbar')
    let text = inputbar.value

    if (text.length === 0 || e.keyCode !== 13) {
      return
    }

    if (this.state.item === '') {
      this.setState({ item: text }, () => {
        inputbar.value = ''
        inputbar.placeholder = `How much did the ${this.state.item} cost ?`

        document.querySelector('#Subtext #Cancel').style.opacity = 1
      })
    } else if (isNaN(text)) {
      inputbar.value = ''
      inputbar.placeholder = 'Please enter a number'
    } else {
      this.setState({ cash: Number(text) }, () => {
        this.props.handleAddTransaction(this.state)
        this.reset()
      })
    }
  }

  reset() {
    this.setState({
      item: '',
      cash: 0
    }, () => {
      document.querySelector('#Subtext #Cancel').style.opacity = 0

      let inputbar = document.getElementById('Inputbar')
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
              ref='inputbar'
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
    );
  }
}

export default HomeInput;
