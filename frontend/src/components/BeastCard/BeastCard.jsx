import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from "reactstrap";

import "./BeastCard.css";

export default class BeastCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg className="CardImg" src={this.props.img} />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
          </CardBody>
          <CardFooter className="text-muted">
            Updated at {this.props.updated}
          </CardFooter>
        </Card>
      </div>
    );
  }
}
