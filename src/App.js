import React, { Component } from 'react';
import Cookies from 'js-cookie';

import './App.css';
import bin from './img/bin.svg';
// import logoD from './img/logo.png';
import logoM from './img/logoWhite.png';
import FlipButton from './FlipButton';

const rand = (min,max) => min + Math.random() * (max - min);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      letters: 0,
      words: 0,
      lorem: 'Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month!'
    }
    this.onChange = this.onChange.bind(this);
    this.updateCounts = this.updateCounts.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onClear = this.onClear.bind(this);
    this.insertLorem = this.insertLorem.bind(this);

    if (Cookies.get('LetterCounter') === 'true') {
      const primaryColor = this.getRandomColor();
      let secondaryColor = this.getRandomColor();
      while(secondaryColor.h < primaryColor.h - 90 || secondaryColor.h > primaryColor.h + 90) {
        secondaryColor = this.getRandomColor();
      }
      document.documentElement.style.setProperty('--primaryColor', `hsl(${primaryColor.h},${primaryColor.s}%,${primaryColor.l}%)`);
      document.documentElement.style.setProperty('--secondaryColor', `hsl(${secondaryColor.h},${secondaryColor.s}%,${secondaryColor.l}%)`);
    } else Cookies.set('LetterCounter', true);
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
    if (letters && letters <= 512) buttonsList.find(item => parseInt(item.dataset.letters, 10) >= letters).classList.add('selected');

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
  getRandomColor() {
    var h = rand(1, 360);
    var s = rand(10, 80);
    var l = rand(20, 70);
    return {h,s,l};
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
            <svg className="logoD" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 63" style={{enableBackground:"new 0 0 120 63"}} xmlSpace="preserve">
              <g>
              	<defs>
              		<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-0.4" y="-0.4" width="63.7" height="64.7">
              			<feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
              		</filter>
              	</defs>
              	<mask maskUnits="userSpaceOnUse" x="-0.4" y="-0.4" width="63.7" height="64.7" id="b_1_">
              		<g style={{"filter":"url(#Adobe_OpacityMaskFilter)"}}>
              			<path id="a_1_" style={{fillRule:"evenodd",clipRule:"evenodd","fill":"#FFFFFF"}} d="M43.3,32.5c-1.7,1.8-4,2.8-6.5,2.8c-5,0-9-4-9-9
              				c0-4.9,4-9,9-9c2.3,0,4.4,0.9,5.9,2.3l6.8-6.4C46.2,9.8,41.6,8,36.8,8c-10.1,0-18.4,8.2-18.4,18.3c0,10.1,8.2,18.3,18.4,18.3
              				c1.7,0,3.3-0.2,4.8-0.7l7.1,7c-3.7,1.8-7.7,2.7-11.9,2.7c-15.1,0-27.5-12.3-27.5-27.4V0H0v26.3C0,46.5,16.5,63,36.8,63
              				c8.1,0,15.8-2.6,22.2-7.4c1.4-1,2.7-2.2,3.9-3.4L43.3,32.5z"/>
              		</g>
              	</mask>
              	<g style={{"mask":"url(#b_1_)"}}>

              			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-241.1487" y1="422.3855" x2="-240.2982" y2="421.5098" gradientTransform="matrix(63.737 0 0 -64.749 15370.1973 27348.1973)">
              			<stop  offset="0" style={{stopColor:"var(--primaryColor)"}}/>
              			<stop  offset="1" style={{stopColor:"var(--secondaryColor)"}}/>
              		</linearGradient>
              		<path style={{fillRule:"evenodd",clipRule:"evenodd","fill":"url(#SVGID_1_)"}} d="M-0.4-0.4h63.7v64.7H-0.4V-0.4z"/>
              	</g>
              	<text transform="matrix(1 0 0 1 67 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>L</text>
              	<text transform="matrix(1 0 0 1 73.5456 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 72.819 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>E</text>
              	<text transform="matrix(1 0 0 1 80.0551 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 79.025 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>T</text>
              	<text transform="matrix(1 0 0 1 85.6576 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 85.946 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>T</text>
              	<text transform="matrix(1 0 0 1 92.4916 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 92.698 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>E</text>
              	<text transform="matrix(1 0 0 1 99.8311 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 98.697 29)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>R</text>
              	<text transform="matrix(1 0 0 1 67 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>CO</text>
              	<text transform="matrix(1 0 0 1 83.028 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 81.41 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>U</text>
              	<text transform="matrix(1 0 0 1 89.1253 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 88.518 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>N</text>
              	<text transform="matrix(1 0 0 1 96.0903 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 95.73 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>T</text>
              	<text transform="matrix(1 0 0 1 102.2756 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 102.481 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>E</text>
              	<text transform="matrix(1 0 0 1 109.6141 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}> </text>
              	<text transform="matrix(1 0 0 1 108.481 40)" style={{"fill":"#9B9B9B", fontFamily:"Arial", fontWeight:"700", fontSize:"10.552px"}}>R</text>
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
            <FlipButton preset="12" letters="96" handleClick={this.insertLorem} />
            <FlipButton preset="16" letters="128" handleClick={this.insertLorem} />
            <FlipButton preset="24" letters="192" handleClick={this.insertLorem} />
            <FlipButton preset="32" letters="256" handleClick={this.insertLorem} />
            <FlipButton preset="64" letters="512" handleClick={this.insertLorem} />
          </div>
          <div className="about">
            <h1 className="title">Letter Counter</h1>
            <p className="aboutText">Refresh your browser to get new colors</p>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
