import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import  InitialPage  from '../components/InitialPage'
import { SafeAreaView } from 'react-navigation';


export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }




    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={{height:"100%"}}>
                    <InitialPage ></InitialPage>
            </SafeAreaView>

        );
    }
}