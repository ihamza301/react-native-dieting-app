import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';

import MyHeader from './MyHeader';

var {width, height} = Dimensions.get('window');

export default class AddressAndDetailScreen extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style = {{flex : 1}}>
                <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} token = {this.props.route.params.token} homeScreen = {true}/>
                <ScrollView style = {{backgroundColor : 'white'}} showsVerticalScrollIndicator = {false}>
                    <View style = {styles.container}>
                        <View style = {styles.header}>
                            <Text style = {[styles.headerText, {color : this.props.route.params.themeColor}]} adjustsFontSizeToFit numberOfLines = {1}>Detail</Text>
                        </View>

                        <View style = {styles.informationContainer}>
                            <Text style = {[styles.text, {color : this.props.route.params.themeColor, fontSize : width / 22}]} adjustsFontSizeToFit numberOfLines = {1}>Pakistan and International Payments</Text>
                            <Text style = {[styles.text, {color : this.props.route.params.themeColor}]} adjustsFontSizeToFit numberOfLines = {1}>Standard Chartered Bank</Text>
                            <View style = {styles.dualInfoContainer}>
                                <Text style = {[styles.text, {color : this.props.route.params.themeColor}]} adjustsFontSizeToFit numberOfLines = {1}>Account Title : {'\t'}</Text>
                                <Text style = {[styles.text, {color : 'black'}]} adjustsFontSizeToFit numberOfLines = {1}>The Food Pharmacy</Text>
                            </View>
                            <View style = {styles.dualInfoContainer}>
                                <Text style = {[styles.text, {color : this.props.route.params.themeColor}]} adjustsFontSizeToFit numberOfLines = {1}>Account Number : {'\t'}</Text>
                                <Text style = {[styles.text, {color : 'black'}]} adjustsFontSizeToFit numberOfLines = {1}>PK55 SCBL 0000001732136501</Text>
                            </View>
                            <View style = {styles.dualInfoContainer}>
                                <Text style = {[styles.text, {color : this.props.route.params.themeColor}]} adjustsFontSizeToFit numberOfLines = {1}>Branch Code : {'\t'}</Text>
                                <Text style = {[styles.text, {color : 'black'}]} adjustsFontSizeToFit numberOfLines = {1}>137</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : 
    {
        flex : 1,
        flexDirection : 'column',
        width : width
    },
    header :
    {
        marginVertical : 20,
        backgroundColor : 'lightgrey',
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
        width : '90%'
    },
    headerText :
    {
        fontSize : 25,
        marginVertical : 5
    },
    informationContainer :
    {
        flex : 1,
        flexDirection : 'column',
        marginVertical : 20,
        marginHorizontal : '7%'
    },
    text :
    {
        fontSize : width / 26,
        marginVertical : 4,
    },
    dualInfoContainer :
    {
        flexDirection : 'row',
    }
});