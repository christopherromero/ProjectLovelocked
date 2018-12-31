import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { TheWedding } from './components/TheWedding';
import { OurStory } from './components/OurStory';
import { Directions } from './components/Directions';
import { DressCode } from './components/DressCode';
import { Registry } from './components/Registry';
import { RSVP } from './components/rsvp';
import { BridalParty } from './components/BridalParty';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/thewedding' component={TheWedding} />
        <Route path='/ourstory' component={OurStory} />
        <Route path='/directions' component={Directions} />
        <Route path='/dresscode' component={DressCode} />
        <Route path='/registry' component={Registry} />
        <Route path='/rsvp' component={RSVP} />
        <Route path="/bridalparty" component={BridalParty} />

      </Layout>
    );
  }
}
