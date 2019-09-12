import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { geting } from "../store/action/action";

class Vieew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allreq: this.props.allreqs,
        }
    }

    componentDidMount() {
        this.props.getreq()
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Emergency Requests',
        headerRight: <Button onPress={() => navigation.navigate('Auth')} title="Logout" color="orange" />,
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', flex: 1 },
    });


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.allreq.map((req, index) => {
                            return (
                                <View key={index} style={styles.drimg}>
                                    <View>
                                        <Image source={require('../imges/dp.png')} style={styles.dp} />
                                    </View>
                                    <View style={styles.donators}>
                                        <Text style={styles.txt}>{req.name} <Text style={styles.blood}> {req.blood}</Text></Text>
                                        <Text style={styles.txt}>{req.number}</Text>
                                        <Text style={styles.txt}>{req.Location}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View style={styles.loads}>
                        {(this.props.loader) ? (<Image source={require('../imges/loader.gif')} style={styles.loading} />) : null}
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loads: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        width: 100,
        height: 100,
        zIndex: 5,
        position: 'absolute',
    },
    donators: {
        paddingLeft: 20,
    },
    dp: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    drimg: {
        flexDirection: 'row',
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 1,
        padding: 10,
        paddingLeft: 10,
    },
    txt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'brown',
    },
    blood: {
        fontSize: 19,
        color: 'red',
        fontWeight: 'bold',
    }
});


function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
        allreqs: state.basicInfo.allreqs,
    })
}


function mapDispatchToProps(dispatch) {
    return ({
        getreq: () => {
            dispatch(geting())
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Vieew)
