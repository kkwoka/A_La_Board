import React from 'react';
import axios from "axios";
var convert = require('xml-js');
const site = "https://www.boardgamegeek.com/xmlapi/";


export default class APICall extends React.Component {
  state = {
    persons: []
  }

  componentDidMount () {
    axios.get( site + 'search?search=Crossbows%20and%20Catapults')
    .then(res => {
      console.log(convert.xml2json(res.data, {compact: true, spaces: 4}));
      this.setState({ person: res.data });
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}