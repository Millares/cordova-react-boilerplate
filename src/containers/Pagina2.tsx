import React from 'react';
import { Row, Col } from 'reactstrap';

interface Pagina2Interface {
}

export default class Pagina2 extends React.Component<{}, Pagina2Interface> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
        <Row>
            <Col xs='12'><h1>Pagina 2</h1></Col>
            <Col xs='6'>Col 1</Col>
            <Col xs='6'>Col 2</Col>
        </Row>
    );
  }
}
