import React, { Component } from 'react';
import './App.css';
import bin from './img/bin.svg';
import logoD from './img/logo.png';
import logoM from './img/logoWhite.png';

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
        <div className="leftContainer"></div>
        <div className="rightContainer"></div>
        <div className="wrapper">
          <div className="logo">
            <img className="logoD" src={logoD} alt="lettercounter"/>
            <img className="logoM" src={logoM} alt="lettercounter"/>
          </div>
          <div className="textarea">
            <label htmlFor="textarea"></label>
            <textarea id="textarea" ref="textarea" onChange={this.onChange} value={this.state.text}/>
            <button onClick={this.onClear}><img src={bin} alt="clear" /></button>
            <button onClick={this.onCopy}>copy</button>
          </div>
          <div className="letters">
            <h2>Letters: </h2>
            <p ref="letterCount">{letterCount}</p>
          </div>
          <div className="words">
            <h2>Words: </h2>
            <p ref="wordCount">{wordCount}</p>
          </div>
          <div className="presets">
            <h2>Presets</h2>
            <button onClick={this.insertLorem.bind(this, 16)}>16</button>
            <button onClick={this.insertLorem.bind(this, 24)}>24</button>
            <button onClick={this.insertLorem.bind(this, 32)}>32</button>
            <button onClick={this.insertLorem.bind(this, 48)}>48</button>
            <button onClick={this.insertLorem.bind(this, 64)}>64</button>
            <button onClick={this.insertLorem.bind(this, 95)}>95</button>
            <button onClick={this.insertLorem.bind(this, 128)}>128</button>
            <button onClick={this.insertLorem.bind(this, 192)}>192</button>
            <button onClick={this.insertLorem.bind(this, 256)}>256</button>
            <button onClick={this.insertLorem.bind(this, 512)}>512</button>
          </div>
          <div className="about">
            <h1 className="title">Letter Counter</h1>
            <p className="aboutText">Developed by Dargains, Foan82 & Vilaça just to make your day better</p>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
