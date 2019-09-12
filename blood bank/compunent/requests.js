import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput } from 'react-native';

export default class Request extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Blood Requests',
        headerRight: <Button onPress={() => navigation.navigate('Auth')} title="Logout" color="orange" />,
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', flex: 1 },
    });
    
    post() {
        this.props.navigation.navigate('post');
    }
    view() {
        this.props.navigation.navigate('view');
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.post.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/post.png')} style={styles.donor} />
                        <Text style={styles.text}>Post Request</Text>
                    </View></TouchableOpacity>

                    <TouchableOpacity onPress={this.view.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/mail.png')} style={styles.donor} />
                        <Text style={styles.text}>View Request</Text>
                    </View></TouchableOpacity>
                </View>

            </View>
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
    blood1: {
        margin: 20,
    },
    donor: {
        width: 125,
        height: 125,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

