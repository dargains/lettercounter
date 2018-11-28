import React, { Component } from 'react';
import './App.css';
import bin from './img/bin.svg';
import logoD from './img/logo.png';
import logoM from './img/logoWhite.png';
import FlipButton from './FlipButton';

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
    this.insertLorem = this.insertLorem.bind(this);
  }
  onChange(event) {
    this.setState({text: this.refs.textarea.value}, this.updateCounts);
  }
  updateCounts() {
    const regex = /\s+/gi;
    const value = this.state.text;
    const words = value.trim() ? value.trim().replace(regex, ' ').split(' ').length : '0';
    const letters = value.trim().length;

    const buttonsList = Array.prototype.slice.call(document.querySelectorAll('[data-letters]'));
    buttonsList.forEach(item => item.classList.remove('selected'))
    if (letters && letters <= 512) buttonsList.find(item => parseInt(item.dataset.letters) >= letters).classList.add('selected');

    this.setState({letters,words});
  }
  insertLorem(event) {
    const lorem = this.state.lorem;
    const size = event.currentTarget.dataset.letters;
    const newText = lorem.substring(0, size);
    this.setState({
      text: newText
    },this.updateCounts);
  }
  onCopy() {
    const range = document.createRange();
    const textarea = this.refs.textarea
    range.selectNodeContents(textarea);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);
    textarea.setSelectionRange(0, 999999);
    textarea.select();
    document.execCommand("copy");
  }
  onClear() {
    this.setState({
      text: '',
      letters: 0,
      words: 0
    });
    const buttonsList = Array.prototype.slice.call(document.querySelectorAll('[data-letters]'));
    buttonsList.forEach(item => item.classList.remove('selected'))
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
            <FlipButton preset="2" letters="16" handleClick={this.insertLorem} />
            <FlipButton preset="3" letters="24" handleClick={this.insertLorem} />
            <FlipButton preset="4" letters="32" handleClick={this.insertLorem} />
            <FlipButton preset="6" letters="48" handleClick={this.insertLorem} />
            <FlipButton preset="8" letters="64" handleClick={this.insertLorem} />
            <FlipButton preset="12" letters="96" handleClick={this.insertLorem} />
            <FlipButton preset="16" letters="128" handleClick={this.insertLorem} />
            <FlipButton preset="24" letters="192" handleClick={this.insertLorem} />
            <FlipButton preset="32" letters="256" handleClick={this.insertLorem} />
            <FlipButton preset="64" letters="512" handleClick={this.insertLorem} />
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
