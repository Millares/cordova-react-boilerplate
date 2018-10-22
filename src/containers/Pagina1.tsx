import React from 'react';
import { Row, Col } from 'reactstrap';

interface Pagina1Interface {
}

export default class Pagina1 extends React.Component<{}, Pagina1Interface> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
        <Row>
            <Col xs='12'><h1>Pagina 1</h1></Col>
            <Col xs='6'>Col 1</Col>
            <Col xs='6'>Col 2</Col>
        </Row>
    );
  }
}
