import React from 'react';
import {Header} from './components/Header/Header';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
