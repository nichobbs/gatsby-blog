import { Row, Col, Container } from 'reactstrap';
import React from 'react';

export class Col2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { 
        console.log("Setting to ", e.target.value)
        this.setState({value: e.target.value}, () => {this.props.onChange(this.state.value);});
    }
  
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </Col>
                    <Col xs="6">
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export class Col2Preview extends React.Component {
    constructor(props) {
        super(props)
        console.log("CONS")
    }
    render() {
        console.log("RENDER")
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        {this.props.value}
                    </Col>
                    <Col xs="6">
                        Here
                    </Col>
                </Row>
            </Container>
        );
    }
}