import React, { Component } from 'react';
import './App.css';
import bin from './img/bin.svg';
// import logoD from './img/logo.png';
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
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="logoD" width="120" height="63" viewBox="0 0 120 63">
            <defs>
              <path id="a" d="M43.318 32.483a8.976 8.976 0 0 1-6.475 2.758c-4.961 0-8.997-4.023-8.997-8.968 0-4.947 4.036-8.97 8.997-8.97 2.279 0 4.355.856 5.942 2.253l6.836-6.426a18.335 18.335 0 0 0-12.778-5.173c-10.13 0-18.374 8.216-18.374 18.316 0 10.098 8.243 18.315 18.374 18.315 1.676 0 3.297-.229 4.84-.65l7.06 7.023c-3.68 1.771-7.715 2.692-11.9 2.692-15.145 0-27.467-12.283-27.467-27.38V0H0v26.273C0 46.524 16.527 63 36.843 63c8.106 0 15.8-2.575 22.244-7.447A37.532 37.532 0 0 0 63 52.128L43.318 32.483z"/>
              <linearGradient id="c" x1="0%" x2="85.047%" y1="0%" y2="87.567%">
                  <stop offset="0%" stopColor="var(--primaryColor)"/>
                  <stop offset="100%" stopColor="var(--secondaryColor)"/>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <text fill="var(--neu06)" fontFamily="Roboto-Black, Roboto" fontSize="10.552" fontWeight="700" letterSpacing=".1">
                <tspan x="67" y="29">L</tspan> <tspan x="72.819" y="29" letterSpacing=".198">E</tspan> <tspan x="79.025" y="29" letterSpacing=".187">T</tspan> <tspan x="85.946" y="29">T</tspan> <tspan x="92.698" y="29" letterSpacing=".095">E</tspan> <tspan x="98.697" y="29">R</tspan>
              </text>
              <text fill="var(--neu06)" fontFamily="Roboto-Black, Roboto" fontSize="10.552" fontWeight="700" letterSpacing=".1">
                <tspan x="67" y="40">CO</tspan> <tspan x="81.41" y="40" letterSpacing=".095">U</tspan> <tspan x="88.518" y="40" letterSpacing="-.048">N</tspan> <tspan x="95.73" y="40">T</tspan> <tspan x="102.481" y="40" letterSpacing=".095">E</tspan> <tspan x="108.481" y="40">R</tspan>
              </text>
              <mask id="b" fill="var(--neu01)">
              <use xlinkHref="#a"/></mask>
              <use fill="var(--neu09)" xlinkHref="#a"/>
              <g fill="url(#c)" mask="url(#b)">
                <path d="M-.368-.374h63.737v64.749H-.368z"/>
              </g>
            </g>
          </svg>
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
            <FlipButton preset="12" letters="95" handleClick={this.insertLorem} />
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
