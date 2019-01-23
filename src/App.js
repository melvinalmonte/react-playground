import React, { Component } from 'react';
import {Button} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:"Hello World."
    };
    this.hello = this.hello.bind(this);
    this.goodBye = this.goodBye.bind(this);
  }

  hello(){
    this.setState({
      message:"Hello Again!"
    })
  }
  goodBye(){
    this.setState({
      message:"Goodbye World!"
    })
  }


  render() {
    return (
        <div>
          <h1>{this.state.message}</h1>
          <Button onClick={this.hello}>Hello</Button>
          <Button onClick={this.goodBye}>Goodbye</Button>
        </div>
    );
  }
}

export default App;
