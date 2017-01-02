const React = require('react');
const { Component } = require('react');
const { StyleSheet, Slider } = require('react-native');
const { init, em, Row, FormGroup, Flex, Container, Column, Text, Bold, H1, H2, H3, H4, H5, H6, A } = require('./elements');

const initWithFontSize = (fontSize)=>init({ h6: { color: '#999' } }, { fontSize });

//Initialize with optional additional styles and variables
initWithFontSize(16);
module.exports = class Basic extends Component {

    constructor (props) {
        super(props);
        this.state = { fontSize: 16 }
    }

    adjustFontSize = (fontSize)=> {
        initWithFontSize(fontSize);
        this.setState({ fontSize });
    };

    render () {
        return (
            <Flex>
                <Row style={{ marginTop: 10 }}>
                    <Column>
                        <Text style={{ fontSize: 14 }}>FontSize: {this.state.fontSize}</Text>
                    </Column>
                    <Slider
                        step={.5}
                        style={{ flex: 1 }}
                        minimumValue={10}
                        maximumValue={20}
                        value={this.state.fontSize}
                        onValueChange={(value) => this.adjustFontSize(value)}/>

                </Row>
                <Container style={{ justifyContent: 'center' }}>
                    <FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Bold style={styles.description}>Headers with em font sizes</Bold>
                        <H1>Header 1</H1>
                        <Text>Lorem</Text>
                        <H2>Header 2</H2>
                        <Text>Lorem</Text>
                        <H3>Header 3</H3>
                        <Text>Lorem</Text>
                        <H4>Header 4</H4>
                        <Text>Lorem</Text>
                        <H5>Header 5</H5>
                        <Text>Lorem</Text>
                        <H6>Header 6</H6>
                        <Text>Lorem</Text>
                    </FormGroup>
                    <FormGroup>
                        <Bold style={styles.description}>Row with columns equally space apart with standardised
                            gutter</Bold>
                        <Row space noPad>
                            <Column>
                                <Bold>1</Bold>
                            </Column>
                            <Column>
                                <Bold>2{'\n'}2</Bold>
                            </Column>
                            <Column>
                                <Bold>3{'\n'}3{'\n'}3</Bold>
                            </Column>
                        </Row>
                        <Bold style={styles.description}>Row custom flex values</Bold>
                        <Row>
                            <Flex value={1 / 3}>
                                <Bold>1/3</Bold>
                            </Flex>
                            <Flex value={2 / 3}>
                                <Bold>2/3</Bold>
                            </Flex>
                        </Row>
                    </FormGroup>
                </Container>
            </Flex>
        );
    }
};

var styles = StyleSheet.create({
    description: {
        color: '#d1d1d1'
    }
})