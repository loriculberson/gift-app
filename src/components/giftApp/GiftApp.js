import React, { Component } from 'react';
import Form from '../form/Form'
import GiftList from '../giftList/GiftList'

class GiftApp extends Component {
  state = {
    name: '',
    gift: '',
    allGifts: []
  }

  handleInput = event => {
    const { name, value } = event.target
    //track what is being typed in the input name field
    // get the content of the input field
    //set the state of the gift recipient
    this.setState({ [name]: value })
  }

  handleSubmittedGift = e => {
    e.preventDefault()
    console.log('submitted gift')
    //populate the gift object
    //push newly created object into allGifts array
    //clear both input fields
    const newGift = { name: this.state.name, gift: this.state.gift }
    const newAllGifts = [...this.state.allGifts, newGift]

    this.setState({ 
      name: '',
      gift: '',
      allGifts: newAllGifts
     })

  }

  render() {
    return (
      <>
        <Form 
           handleInput={this.handleInput}
           nameValue={this.state.name}
           giftValue={this.state.gift}
           submitGift={this.handleSubmittedGift}
        />
        <GiftList list={this.state.allGifts}/>
      </>
    );
  }
}

export default GiftApp;