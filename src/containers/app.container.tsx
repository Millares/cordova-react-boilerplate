import React from 'react';
import Layout from './app.layout';

interface AppI {}

export default class App extends React.Component<{}, AppI> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return <Layout></Layout>;
  }
}
