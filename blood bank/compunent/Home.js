import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput } from 'react-native';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Blood Bank',
        headerRight: <Button onPress={() => navigation.navigate('Auth')} title="Logout" color="orange" />,
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', flex: 1 },
    });

    donor() {
        this.props.navigation.navigate('donor');
    }
    viewdonors() {
        this.props.navigation.navigate('viewdonors');
    }
    request() {
        this.props.navigation.navigate('requests');
    }
    bank() {
        this.props.navigation.navigate('bank');
    }
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.donor.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/donor.png')} style={styles.donor1} />
                    </View></TouchableOpacity>

                    <TouchableOpacity onPress={this.viewdonors.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/donors.jpg')} style={styles.donor} />
                        <Text style={styles.text}>View Donors</Text>
                    </View></TouchableOpacity>
                </View>

                <View style={styles.row2}>
                    <TouchableOpacity onPress={this.request.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/request.jpg')} style={styles.donor} />
                        <Text style={styles.text}>Requests</Text>
                    </View></TouchableOpacity>

                    <TouchableOpacity onPress={this.bank.bind(this)}><View style={styles.blood1}>
                        <Image source={require('../imges/bank.jpg')} style={styles.donor} />
                        <Text style={styles.text}>Search Blood</Text>
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
    donor1: {
        width: 150,
        height: 150,
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
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

