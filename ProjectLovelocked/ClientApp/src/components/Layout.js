import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { TransitionMenu } from './TransitionMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
      return (
          <Grid fluid>
        <Row>
            <TransitionMenu />
            <div id="contentContainer">
                {this.props.children}
            </div>
        </Row>
      </Grid>
    );
  }
}
