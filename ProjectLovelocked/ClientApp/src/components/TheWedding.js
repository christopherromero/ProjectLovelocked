import React, { Component } from 'react';

export class TheWedding extends Component {
    displayName = TheWedding.name

    render() {
        return (
            <div>
                <h1>When</h1>
                <p>Saturday, May 4, 2019
                <br></br>
                Ceremony: 6: 00pm
                <br></br>
                Reception: 8: 00pm
                <br></br>
                </p>
                <h1>Where</h1>
                <p>Misty Morning Barn at Clutch Farm
                <br></br>
                Fort Myers, Florida
                <br></br>
                Pictures of venue
                <br></br>
                </p>
            </div>
        );
    }
}