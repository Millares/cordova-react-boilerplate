import React from 'react';
import { Row } from 'reactstrap';

interface HomeInterface {
}

export default class Home extends React.Component<{}, HomeInterface> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return <Row>
        <h1>Home Page</h1>
    </Row>;
  }
}
