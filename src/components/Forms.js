import React, { Component } from 'react'

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      dat: '',
      vvc: '',
      post: '',
      storeCard: false,
      errorNum: false,
      errorDate: false,
      errorVvc: false,
      errorsPost: false,
      comlete: false
    }
  }

  storeCard() {
    this.setState({storeCard: ! this.state.storeCard})
  }
  onChange(e) {
    let value = e.target.value
    let name = e.target.name

    this.setState({[ name ]: `${value}`})
  }

  handleSubmit() {

    const regEmail = /^\w+@\w+\.\w{2,4}$/i
    const regCard =  /^\d{16}$/

    if (this.state.number === '') {
      this.setState({
        number: 'cant be empty',
        errorNum: true
          })
    } else if (this.state.number.search(regCard) == '-1') {
      this.setState({
        number: 'enter right card',
        errorNum: true
        })
    } else {
      this.setState({errorNum: false})
    }

    if (this.state.dat === '') {
      this.setState({errorDate: true})
    } else {
      this.setState({errorDate: false})
    }

    if (this.state.vvc === '') {
      this.setState({
        vvc: 'cant be empty',
        errorVvc: true
      })
    } else if (this.state.vvc.length != 3) {
      this.setState({
        vvc: 'Enter the last 3 numbers',
        errorVvc: true
      })
    } else {
      this.setState({errorVvc: false})
    }

    if (this.state.storeCard) {
      if (this.state.post === '') {
        this.setState({
          post: 'cant be empty',
          errorsPost: true
        })

      } else if (this.state.post.search(regEmail) == '-1') {
          this.setState({
            post: 'enter right value',
            errorsPost: true
          })
      } else {
        this.setState({errorsPost: false})
      }
    }
  }

  render() {
    return (
      this.state.complete ?
      <h1>Successfully registered!</h1>

      :<section style={{width: '50%', textAlign: 'left', margin: '0 auto'}}>
        <section style = {this.state.errorNum? {color: 'red'}: null}>
          <h2>Credit Card Number</h2>
          <p>Visa/Mastercard</p>
          <input
            type='text'
            placeholder='card number'
            value={this.state.number}
            name='number'
            onChange={this.onChange.bind(this)}
          />
        </section>
        <section style = {this.state.errorDate? {color: 'red'}: null}>
          <h2>Expiration Date</h2>
          <input
            type='date'
            placeholder='expiration date'
            value={this.state.dat}
            name='dat'
            onChange={this.onChange.bind(this)}
          />
        </section>
        <section style = {this.state.errorVvc? {color: 'red'}: null}>
          <h2>CVV</h2>
          <input
            type='text'
            placeholder='cvv'
            value={this.state.vvc}
            name='vvc'
            onChange={this.onChange.bind(this)}
          />
        </section>
        <section style={{display: 'flex'}} >
          <h2 style={{width: '30%'}}>Store the card</h2>
          <input
            style={{width: '5%', marginTop: '20px', height: '20px'}}
            type='checkbox'
            onClick={this.storeCard = this.storeCard.bind(this)}
          />
        </section>
        {
          this.state.storeCard
          ? <section style = {this.state.errorsPost? {color: 'red'}: null}>
              <h2>Enter Email</h2>
                  <input
                    type='text'
                    placeholder='email'
                    value={this.state.post}
                    name='post'
                    onChange={this.onChange.bind(this)}
                  />
            </section>
          : null
        }
        <section style={{marginTop: '20px'}}>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </section>
      </section>
    );
  }
}

export default Forms
