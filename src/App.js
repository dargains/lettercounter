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
            <div className="flip-container" onClick={this.insertLorem.bind(this, 16)}>
            	<div className="flipper">
            		<div className="front">2</div>
            		<div className="back">16</div>
            	</div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 24)}>
              <div className="flipper">
                <div className="front">3</div>
                <div className="back">24</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 32)}>
              <div className="flipper">
                <div className="front">4</div>
                <div className="back">32</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 48)}>
              <div className="flipper">
                <div className="front">6</div>
                <div className="back">48</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 64)}>
              <div className="flipper">
                <div className="front">8</div>
                <div className="back">64</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 95)}>
              <div className="flipper">
                <div className="front">12</div>
                <div className="back">95</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 128)}>
              <div className="flipper">
                <div className="front">128</div>
                <div className="back">16</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 192)}>
              <div className="flipper">
                <div className="front">24</div>
                <div className="back">192</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 256)}>
              <div className="flipper">
                <div className="front">32</div>
                <div className="back">256</div>
              </div>
            </div>
            <div className="flip-container" onClick={this.insertLorem.bind(this, 512)}>
              <div className="flipper">
                <div className="front">64</div>
                <div className="back">512</div>
              </div>
            </div>
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
