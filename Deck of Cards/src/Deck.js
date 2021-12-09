/* eslint-disable no-useless-constructor */
import Card from './Card'
import React, { Component } from 'react';
import axios from 'axios';
import './Deck.css'
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
    
    async getCard() {
        let deck_id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No cards remaining!")
            }
            console.log(cardRes.data);
            let card = cardRes.data.cards[0];
        
            this.setState(st => ({
            drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
         ]
        }));
        } catch (error) { alert(error) }  
    }
    
    render() {
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} name={c.name} image={c.image} />
        ))
        return (
            <div className="Deck">
                <button onClick = {this.getCard}>GIMME A CARD!</button>
                <div className="Deck-cardarea">{cards}</div>
            </div>
        )
    }
}

export default Deck;