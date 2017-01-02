# react-native-common-elements

<img src="./screen.gif"/>

###### Having developed a large number of applications and boilerplate code, of all the things I can't live without is a set of customisable layout components.

## Components
- ```<H1>...<H6>``` - text ranging from 1em to 2.5 em
- ```<Text/>``` - text with standardised font size and styles
- ```<Bold/>``` - same as text but bold
- ```<Container/>``` - container with standardised guttering
- ```<Row space noPad/>``` - Horizontal view with options to space apart and negate container gutter padding
- ```<Flex/>``` - view with flex, can override value with ``` value={x}```
- ```<Column/>``` columns within a row element, uses standard guttering

## Util
- ```em(value, baseValue)``` returns unit based on device width


## Example
```
<Flex>
    <Row space>
        <Column>
            <Text>Text</Text>
        </Column>
        <Column>
            <Text>Text2</Text>
        </Column>
    </Row>
    <Container style={{ justifyContent: 'center' }}>
        <FormGroup>
            <H1>Header 1</H1>
            <H2>Header 2</H2>
            <H3>Header 3</H3>
            <H4>Header 4</H4>
            <H5>Header 5</H5>
            <H6>Header 6</H6>
            <Bold>Header 6</Bold>
        </FormGroup>
        <FormGroup>
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
```