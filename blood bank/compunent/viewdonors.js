import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { getdonor } from "../store/action/action";

class Viewdonors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldonors: this.props.alldonors,
        }
    }

    componentDidMount() {
        this.props.getDonor()
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Available Blood',
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
                    (this.state.alldonors.map == undefined) ? (
                        this.props.navigation.navigate('Home'),
                        alert('Something Went Wrong')
                       
                    ):(
                        this.state.alldonors.map((donors, index) => {
                            return (
                                <View key={index} style={styles.drimg}>
                                    <View>
                                        <Image source={require('../imges/dp.png')} style={styles.dp} />
                                    </View>
                                    <View style={styles.donators}>
                                        <Text style={styles.txt}>{donors.name} <Text style={styles.blood}> {donors.blood}</Text></Text>
                                        <Text style={styles.txt}>{donors.number}</Text>
                                        <Text style={styles.txt}>{donors.Location}</Text>
                                    </View>
                                </View>
                            )
                        })
                        )
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
        alldonors: state.basicInfo.allDonor,
    })
}


function mapDispatchToProps(dispatch) {
    return ({
        getDonor: () => {
            dispatch(getdonor())
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Viewdonors)
