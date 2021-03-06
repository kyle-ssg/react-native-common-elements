import React, {Component, PropTypes} from 'react';
import ReactNative, {Dimensions, View, TouchableOpacity, StyleSheet} from 'react-native';
import em from './em';
import merge from './merge';
import _styles from './styles';
import _styleVariables from './styleVariables';

var styleVariables = Object.assign(_styleVariables, {});
var stylesheet = StyleSheet.create(_styles);


//Merges style variables and stylesheets
const init = (styles = {}, variables = {})=> {
    styleVariables = Object.assign(_styleVariables, variables);
    stylesheet = StyleSheet.create(merge(_styles, styles));
};

//A horizontal row
const Row = (props)=>(
    <View
        {... props}
        style={[stylesheet.row, props.style, props.space && stylesheet.space, props.noPad && {
            marginLeft: -styleVariables.gutter / 2,
            marginRight: -styleVariables.gutter / 2
        }]}>{props.children}</View>
);

Row.displayName = "Row";

Row.propTypes = {
    children: PropTypes.node,
    space: PropTypes.bool,
    noPad: PropTypes.bool,
};

// Flex with custom value, defaults to 1
const Flex = (props)=>(
    <View
        {... props}
        style={[stylesheet.flex, props.style, props.value && { flex: props.value }]}>{props.children}</View>
);

Flex.displayName = "Flex";

Flex.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number,
};

// FormGroup with custom value, defaults to 1
const FormGroup = (props)=>(
    <View
        {... props}
        style={[props.style, {
            paddingTop: styleVariables.paddingVertical,
            paddingBottom: styleVariables.paddingVertical
        }]}>{props.children}</View>
);

FormGroup.displayName = "FormGroup";

FormGroup.propTypes = {
    children: PropTypes.node,
};

// Used within a row, sets margin to gutter base
const Column = (props)=>(
    <View {... props} style={[stylesheet.column, props.style, {
        marginLeft: styleVariables.gutter / 2,
        marginRight: styleVariables.gutter / 2
    }]}>
        {props.children}
    </View>
);

Column.displayName = "Column";

Column.propTypes = {
    children: PropTypes.node
};


// Used within a row, sets margin to gutter base
const Container = (props)=>(
    <View {... props} style={[stylesheet.container, stylesheet.flex, props.style, Object.assign({
        paddingLeft: styleVariables.gutter,
        paddingRight: styleVariables.gutter
    }, props.style)]}>
        {props.children}
    </View>
);

Container.displayName = "Container";

Container.propTypes = {
    children: PropTypes.node
};


// Used within a row, sets margin to gutter base
const Text = (props)=>(
    <ReactNative.Text {... props} style={[stylesheet.text, {
        fontSize: styleVariables.fontSize,
        color: styleVariables.color
    }, props.style]}>
        {props.children}
    </ReactNative.Text>
);

Text.displayName = "Text";

Text.propTypes = {
    children: PropTypes.node
};

// Used within a row, sets margin to gutter base
const Bold = (props)=>(
    <Text {... props} style={[stylesheet.text, props.style, {
        fontSize: em(1, styleVariables.fontSize), fontWeight: 'bold'
    }]}>
        {props.children}
    </Text>
);

Bold.displayName = "Bold";

Bold.propTypes = {
    children: PropTypes.node
};

// Headers
const H6 = (props)=>(
    <Text {... props} style={[stylesheet.h6, props.style, {
        fontSize: em(1, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H6.displayName = "H6";

H6.propTypes = {
    children: PropTypes.node
};


const H5 = (props)=>(
    <Text {... props} style={[stylesheet.h5, props.style, {
        fontSize: em(1.25, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H5.displayName = "H5";

H5.propTypes = {
    children: PropTypes.node
};


const H4 = (props)=>(
    <Text {... props} style={[stylesheet.h4, props.style, {
        fontSize: em(1.5, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H4.displayName = "H4";

H4.propTypes = {
    children: PropTypes.node
};


const H3 = (props)=>(
    <Text {... props} style={[stylesheet.h3, props.style, {
        fontSize: em(1.75, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H3.displayName = "H3";

H3.propTypes = {
    children: PropTypes.node
};


const H2 = (props)=>(
    <Text {... props} style={[stylesheet.h2, props.style, {
        fontSize: em(2, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H2.displayName = "H2";

H2.propTypes = {
    children: PropTypes.node
};


const H1 = (props)=>(
    <Text {... props} style={[stylesheet.h1, props.style, {
        fontSize: em(2.5, styleVariables.fontSize)
    }]}>{props.children}</Text>
);

H1.displayName = "H1";

H1.propTypes = {
    children: PropTypes.node
};

globalise = ()=>{
    global.em = em;
    global.Row = Row;
    global.Flex = Flex;
    global.FormGroup = FormGroup;
    global.Container = Container;
    global.Column = Column;
    global.Text = Text;
    global.Bold = global.Strong = Bold;
    global.H1 = H1;
    global.H2 = H2;
    global.H3 = H3;
    global.H4 = H4;
    global.H5 = H5;
    global.H6 = H6;
};
module.exports = { init, em, Row, Flex, FormGroup, Container, Column, Text, Bold, H1, H2, H3, H4, H5, H6 };