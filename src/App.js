import React, { Component } from 'react';
import {Button} from 'reactstrap'
import "./Styles/Styles.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:"Hello World.",
      title:""
    };

    this.message1 = this.message1.bind(this);
    this.message2 = this.message2.bind(this);
    this.message3 = this.message3.bind(this);
    this.message4 = this.message4.bind(this);
    this.receiveJson = this.receiveJson.bind(this);
  }

  componentDidMount() {
    this.receiveJson();
  }

  receiveJson(){
    let options = {
      headers:{
        "Content-type": "application/json"
      },
      method: "GET"
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({
            title:JSON.stringify(data[0].title)
          })
        })
        .catch(() =>{
          this.setState({
            title:"ERROR: Could not fulfill your request."
          })
        });
  }

  message1(){
    this.setState({
      message:"Message 1"
    })
  }
  message2(){
    this.setState({
      message:"Message 2"
    })
  }
  message3(){
    this.setState({
      message:"Message 3"
    })
  }
  message4(){
    this.setState({
      message:"Message 4"
    })
  }


  render() {
    return (
        <div className="app">
          <form className="message">{this.state.message}</form>
          <form>{this.state.title}</form>
          <div className="grid-container">
            <Button id="my-btn" onClick={this.message1}>Button 1</Button>
            <Button id="my-btn" onClick={this.message2}>Button 2</Button>
            <Button id="my-btn" onClick={this.message3}>Button 3</Button>
            <Button id="my-btn" onClick={this.message4}>Button 4</Button>
          </div>
        </div>
    );
  }
}

export default App;
