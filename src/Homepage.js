import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

export class Homepage extends Component {
    render() {
        return  (
        <Jumbotron>
        <h1> Hello, and welcome!</h1>
        <p>My name is Daisy Xie, and this is my site.</p>
        <Button color="primary">Learn More</Button>
        </Jumbotron>
        )
    }
}

/*
const Example = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  */