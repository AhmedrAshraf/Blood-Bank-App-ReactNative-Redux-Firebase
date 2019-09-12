import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput } from 'react-native';
import { connect } from "react-redux";
import { signup } from "../store/action/action";
import {KeyboardAvoidingView} from 'react-native';

class Signup extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { textAlign: "center", flex: 1 },
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            psw: '',
        }
    }
    goto() {
        this.props.navigation.navigate('Signin')
    }
    Signup() {
        this.props.Register(this.state.name, this.state.email, this.state.psw, this.props.navigation)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <Image source={require('../imges/bloodimg.jpg')} style={styles.bloodimg} />
                <TextInput value={this.state.name} onChangeText={(name) => this.setState({ name })} placeholder='Type Your Name' style={styles.inputfield} />
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} keyboardType="email-address" placeholder='Email Address' style={styles.inputfield} />
                <TextInput value={this.state.psw} onChangeText={(psw) => this.setState({ psw })} secureTextEntry={true} keyboardType="phone-pad" placeholder='Set Pin' style={styles.inputfield} />
                {(this.props.loader) ? (<Image source={require('../imges/loader.gif')} style={styles.loading} />) : null}
                {(this.state.name == '' || this.state.email == '' || this.state.psw == '')?
                (
                    <View style={styles.but}><Button title='Signup' color='#f4511e'/></View>
                ):(
                    <View style={styles.but}><Button title='Signup' onPress={this.Signup.bind(this)} color='brown' /></View>
                )}
                <TouchableOpacity onPress={this.goto.bind(this)}><Text style={styles.goto}>Already have an Account ? Login Here</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bloodimg: {
        width: 350,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    inputfield: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        width: 300,
        margin: 10,
        paddingLeft: 20,
    },
    but: {
        width: 300,
        padding: 20,
    },
    goto: {
        color: 'red',
        fontSize: 16,
    },
    loading: {
        width: 100,
        height: 100,
        zIndex: 5,
        position: 'absolute',    }
});

function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        Register: (name, email, psw, navigation) => {
            dispatch(signup(name, email, psw, navigation))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
