import React from "react";

import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

import StarRating from 'react-native-star-rating';

export default class RecommendationBox extends React.Component
{
    render()
    {
        let imageUrl = '';
        if(this.props.item.thumbnail.length === 0)
        {
            if(this.props.item.thumbnail2.length === 0)
            {
                if(this.props.item.thumbnail3.length === 0)
                {
                    imageUrl = 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
                }
                else
                {
                    imageUrl = this.props.item.thumbnail3;
                }
            }
            else
            {
                imageUrl = this.props.item.thumbnail2;
            }
        }
        else
        {
            //imageUrl = this.props.item.thumbnail;
            imageUrl = 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
        }

        return (
            <TouchableOpacity style = {[styles.container, styles.boxWithShadow, {borderColor : this.props.themeColor, borderWidth : 5, backgroundColor : this.props.themeColor}]} onPress = {() => this.props.navigation.navigate('Recommendation-Detail-Screen', {item : this.props.item})}>
                <View style = {styles.innerContainer}>
                    <View style = {{height : 300, width : 350}}>
                        <Image style={styles.image} source={{uri : imageUrl}} resizeMethod = {'auto'} resizeMode = {'cover'}/>
                    </View>
                    <View style = {{alignSelf : 'flex-start', marginHorizontal : 50, marginVertical : 30, flexDirection : 'column'}}>
                        <Text style = {{color : 'black', fontWeight : 'bold', fontSize : 26}}>
                            {this.props.item.recom_name}
                        </Text>
                        <Text style = {{color : 'white', fontSize : 18}}>
                            {this.props.item.description}
                        </Text>
                        <View style = {{flexDirection : 'row', marginTop : 25}}>
                            <View style = {{width : 150}}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={Number(this.props.item.rating)}
                                    fullStarColor = {'yellow'}
                                    halfStarColor = {'yellow'}
                                    emptyStarColor = {'yellow'}
                                    starSize = {20}
                                />
                            </View>
                            <View style = {{marginLeft : 35, flexDirection : 'column', alignItems : 'center'}}>
                                <Text style = {{color : 'white', fontSize : 20, fontWeight : 'bold'}}>TFP Rating</Text>
                                <Text style = {{color : 'black', fontSize : 26, fontWeight : 'bold'}}>{this.props.item.rating}/5</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }   
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex : 0.5,
            flexDirection : 'row',
            height : 500,
            backgroundColor : "#fff",
            margin : 10,
            paddingBottom : 50,
            justifyContent : 'center',
  
        },
        innerContainer:
        {
            flex : 1,
            flexDirection : 'column',
            alignItems : 'center'
        },
        boxWithShadow: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,  
            elevation: 5
        },        
        text:
        {
            marginHorizontal : 30,
            marginVertical : 10
        },
        image: {
            flex : 1,
        }
    }
);