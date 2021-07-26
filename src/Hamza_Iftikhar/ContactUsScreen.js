import React from 'react';
import { ScrollView, View, Image, Text, Dimensions, StyleSheet } from 'react-native';

import MyHeader from './MyHeader';

var {width, height} = Dimensions.get('window');

export default class ContactUsScreen extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style = {{flex : 1}}>
                <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} homeScreen = {true}/>
                <ScrollView style = {{backgroundColor : 'white'}} showsVerticalScrollIndicator = {false}>
                    <Text style = {[styles.headerText, {color : this.props.route.params.themeColor, }]} adjustsFontSizeToFit numberOfLines = {1}>Contact Us:</Text>
                    <View style = {styles.container}>
                        <View style = {styles.section}>
                            <Image style = {styles.image} source = {require('./Images/Contact-1.png')} resizeMode = 'contain'/>
                            <Text style = {styles.sectionHeader}>Give us a Call</Text>
                            <Text style = {styles.sectionText}>We're available from 8 AM to 11 PM EST, 7 days a week.</Text>
                        </View>
                        <View style = {styles.section}>
                            <Image style = {styles.image} source = {require('./Images/Contact-2.png')} resizeMode = 'contain'/>
                            <Text style = {styles.sectionHeader}>Chat with us</Text>
                            <Text style = {styles.sectionText}>We're available from 9 AM to 9 PM EST, 7 days a week.</Text>
                        </View>
                        <View style = {styles.section}>
                            <Image style = {styles.image} source = {require('./Images/Contact-3.png')} resizeMode = 'contain'/>
                            <Text style = {styles.sectionHeader}>Write to us</Text>
                            <Text style = {styles.sectionText}>Fill out our form and we will contact you within 24 hours.</Text>
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
        width : width,
        alignItems : 'center'
    },
    headerText :
    {
        fontSize : width / 21,
        marginVertical : 15,
        marginHorizontal : 15,
        fontWeight : 'bold'
    },
    section : 
    {
        flexDirection : 'column',
        alignItems : 'center',
        marginVertical : 10,
        width : width * 0.7,
    },
    image : 
    {
        height : width / 5,
        width : width / 5
    },
    sectionHeader : 
    {
        fontSize : width / 14,
        marginVertical : 4,
        textAlign : 'center',
    },
    sectionText : 
    {
        fontSize : width / 28,
        marginVertical : 4,
        textAlign : 'center',
        color : 'grey'
    },
    text :
    {
        fontSize : width / 26,
        marginVertical : 4,
    }
});