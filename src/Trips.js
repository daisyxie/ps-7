import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/trips.csv', (err, data) => {
            this.setState({
                data: data
            })
        })
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Trips
                 { this.state.data.map((d, i) => {
                       return <Col sm="6" key={ "trip" + i }>
                              <Card>
                                <CardBody>
                                  <CardTitle>
                                    { d.title }
                                  </CardTitle>
                                  <CardText>
                                    { d.description }
                                  </CardText>
                                  <a target="_blank" href={ d.link }>
                                    <Button>See More..</Button>
                                  </a>
                                </CardBody>
                              </Card>
                              <br/>
                              </Col>
                   
                   }) }
               </div>
    }
}