import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      letters: 0,
      words: 0,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nam necessitatibus velit dolorum delectus quia doloremque accusamus quas praesentium facilis distinctio temporibus saepe explicabo cumque possimus neque asperiores animi exercitationem, illum ad excepturi, eligendi veniam molestiae! Explicabo iure deserunt vitae illo laborum facilis est, mollitia quia et illum, minima atque sequi commodi facere voluptate sint assumenda. Voluptate corporis sequi, facilis. Sunt iste libero rerum eum alias exam!'
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
        <textarea ref="textarea" onChange={this.onChange} onDoubleClick={this.onClear} value={this.state.text} rows="6"/>
        <br />
        <button onClick={this.onCopy}>copy</button>
        <button onClick={this.onClear}>clear</button>
        <h3>Letters: </h3>
        <p ref="letterCount">{letterCount}</p>
        <h3>Words: </h3>
        <p ref="wordCount">{wordCount}</p>
        <h2>Lorem Ipsum Presets</h2>
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
