import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView} from 'react-native';
import { connect } from "react-redux";
import { searchblood } from "../store/action/action";

class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searched: this.props.searched,
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Search Blood',
        headerRight: <Button onPress={() => navigation.navigate('Auth')} title="Logout" color="orange" />,
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', flex: 1 },
    });

    search() {
        this.props.searchBlood(this.state.search.toUpperCase())
    }

    render() {
        return (
            <ScrollView>

            <View style={styles.container}>

                <View style={styles.bar}>
                    <TextInput value={this.state.search} onChangeText={(search) => this.setState({ search })} placeholder='What`s Your Blood... ' style={styles.search} />
                    <View>
                        <Button title='Search' color='brown' onPress={this.search.bind(this)} />
                    </View>

                </View>

                {
                    (this.state.searched.map == undefined) ? (
                        this.props.navigation.navigate('Home'),
                        alert('Something Went Wrong')
                        ) : (
                            this.state.searched.map((search, index) => {
                                return (
                                    <View key={index} style={styles.drimg}>
                                        <View>
                                            <Image source={require('../imges/dp.png')} style={styles.dp} />
                                        </View>
                                        <View style={styles.donators}>
                                            <Text style={styles.txt}>{search.name} <Text style={styles.blood}> {search.blood}</Text></Text>
                                            <Text style={styles.txt}>{search.number}</Text>
                                            <Text style={styles.txt}>{search.Location}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        )
                }

                {(this.props.loader) ? (<View style={styles.loads}><Image source={require('../imges/loader.gif')} style={styles.loading} /></View>) : null}

            </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        flexDirection: 'row',
        margin: 5,
    },
    search: {
        borderWidth: 1,
        borderColor: 'brown',
        elevation: 1,
        padding: 10,
        paddingLeft: 10,
        width: 280,
        height: 35,
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
    },
});

function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
        searched: state.basicInfo.search,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        searchBlood: (search) => {
            dispatch(searchblood(search))
        },
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Bank)
