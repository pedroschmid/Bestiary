import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import BeastCard from "./BeastCard/BeastCard";

export default class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: []
    };
  }

  componentDidMount() {
    axios.get(`/beast`).then(res => {
      const beasts = res.data;
      this.setState({ beasts });
    });
  }

  render() {
    let beastCards = this.state.beasts.map(beast => {
      return (
        <Col sm="4">
          <BeastCard
            img={beast.imgURL}
            title={beast.name}
            text={beast.description}
            updated={beast.updatedAt}
          />
        </Col>
      );
    });

    return (
      <Container fluid>
        <Row>{beastCards}</Row>
      </Container>
    );
  }
}
