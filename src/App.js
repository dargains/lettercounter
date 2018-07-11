import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      letters: 0,
      words: 0,
      lorem: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One month!'
    }
    this.onChange = this.onChange.bind(this);
    this.updateCounts = this.updateCounts.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  onChange(event) {
    this.setState({text: this.refs.textarea.value}, this.updateCounts);
  }
  updateCounts() {
    const letters = this.state.text.length;
    const words = this.state.text ? this.state.text.split(" ").length : 0;
    this.setState({letters,words});
  }
  insertLorem(size) {
    const lorem = this.state.lorem;
    const newText = lorem.substring(0, size);
    this.setState({
      text: newText
    },this.updateCounts);
  }
  onCopy() {
    this.refs.textarea.select();
    document.execCommand("copy");
  }
  onClear() {
    this.setState({
      text: '',
      letters: 0,
      words: 0
    });
  }
  render() {
    const letterCount = this.state.letters;
    const wordCount = this.state.words;
    return (
      <main>
        <div className="leftContainer">
          <h1 className="title">Letter Counter</h1>
          <div className="about">
            <h2 className="subtitle">Letter Counter</h2>
            <p className="aboutText">Developed by Dargains, Foan82 & Vilaça</p>
            <p className="aboutText">just to make your day better</p>
          </div>
        </div>
        <div className="textarea">
          <textarea ref="textarea" onChange={this.onChange} onDoubleClick={this.onClear} value={this.state.text} rows="6"/>
          <button onClick={this.onClear}>clear</button>
          <button onClick={this.onCopy}>copy</button>
        </div>
        <h3>Letters: </h3>
        <p ref="letterCount">{letterCount}</p>
        <h3>Words: </h3>
        <p ref="wordCount">{wordCount}</p>
        <h2>Presets</h2>
        <button onClick={this.insertLorem.bind(this, 16)}>16 char</button>
        <button onClick={this.insertLorem.bind(this, 24)}>24 char</button>
        <button onClick={this.insertLorem.bind(this, 32)}>32 char</button>
        <button onClick={this.insertLorem.bind(this, 48)}>48 char</button>
        <button onClick={this.insertLorem.bind(this, 64)}>64 char</button>
        <button onClick={this.insertLorem.bind(this, 95)}>95 char</button>
        <button onClick={this.insertLorem.bind(this, 128)}>128 char</button>
        <button onClick={this.insertLorem.bind(this, 192)}>192 char</button>
        <button onClick={this.insertLorem.bind(this, 256)}>256 char</button>
        <button onClick={this.insertLorem.bind(this, 512)}>512 char</button>
      </main>
    );
  }
}

export default App;
