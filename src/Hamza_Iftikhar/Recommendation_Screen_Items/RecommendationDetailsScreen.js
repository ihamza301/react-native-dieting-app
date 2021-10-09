import React from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';

import MyHeader from '../MyHeader.js'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Divider } from 'react-native-paper';

import StarRating from 'react-native-star-rating';

export default class RecommendationDetailsScreen extends React.Component
{   

    constructor(props)
    {
        super(props);
    }

    render()
    {
        let imageUrl = '';
        if(this.props.route.params.item.thumbnail.length === 0)
        {
            if(this.props.route.params.item.thumbnail2.length === 0)
            {
                if(this.props.route.params.item.thumbnail3.length === 0)
                {
                    imageUrl = 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
                }
                else
                {
                    imageUrl = this.props.route.params.item.thumbnail3;
                }
            }
            else
            {
                imageUrl = this.props.route.params.item.thumbnail2;
            }
        }
        else
        {
            //imageUrl = this.props.route.params.item.thumbnail;
            imageUrl = 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
        }

        return(
            <View style = {{flex : 1, backgroundColor : 'lightgrey'}}>
                <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} token = {this.props.route.params.token} homeScreen = {true}/>
                <ScrollView style = {{backgroundColor : 'lightgrey'}} showsVerticalScrollIndicator = {false}>
                    <View style = {{flex : 1, backgroundColor : 'lightgrey', marginBottom : 20}}>
                        <View>
                            <Text style = {{marginHorizontal : '5%', marginVertical : 10, color : this.props.route.params.themeColor, fontSize : 15}}>
                                TFP Recommendation
                            </Text>
                        </View>

                        <View style = {{flex : 1, alignItems : 'center', flexDirection : 'column'}}>
                            <Text style = {{color : this.props.route.params.themeColor, fontSize : 26, fontWeight : 'bold'}}>{this.props.route.params.item.recom_name}</Text>
                            <View style = {{height : 300, width : 350, marginVertical : 30}}>
                                <Image style={{flex : 1}} source={{uri : imageUrl}} resizeMethod = {'auto'} resizeMode = {'cover'}/>
                            </View>
                        </View>

                        <View style = {{flex : 1, flexDirection : 'column', marginHorizontal : 40}}>
                            <Text style = {{color : this.props.route.params.themeColor, fontSize : 24, fontWeight : 'bold'}}>{this.props.route.params.item.recom_name}</Text>
                            <Text style = {{color : 'black', fontSize : 16}}>"{this.props.route.params.item.description}"</Text>

                            <View style = {{flexDirection : 'row', alignItems : 'center', marginVertical : 10, marginRight : 40}}>
                                <View style = {{width : 100, marginRight : '5%'}}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={Number(this.props.route.params.item.rating)}
                                        fullStarColor = {'yellow'}
                                        halfStarColor = {'yellow'}
                                        emptyStarColor = {'yellow'}
                                        starSize = {15}
                                    />
                                </View>
                                <Text>{this.props.route.params.item.rating} Review/s</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginRight : 40}}>
                                <Icon style = {{marginVertical : 5, marginRight : '5%'}} name="circle" size={14} color={this.props.route.params.themeColor} />
                                <Text>Dummy 1</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginRight : 40}}>
                                <Icon style = {{marginVertical : 5, marginRight : '5%'}} name="circle" size={14} color={this.props.route.params.themeColor} />
                                <Text>Dummy 2</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginRight : 40}}>
                                <Icon style = {{marginVertical : 5, marginRight : '5%'}} name="circle" size={14} color={this.props.route.params.themeColor} />
                                <Text>Dummy 3</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginVertical : 10, alignItems : 'center', marginRight : 80}}>
                                <Text style = {{color : this.props.route.params.themeColor, fontSize : 16, marginRight : 5}}>Address:</Text>
                                <Text>{this.props.route.params.item.address}</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginVertical : 10, alignItems : 'center', marginRight : 80}}>
                                <Text style = {{color : this.props.route.params.themeColor, fontSize : 16, marginRight : 5}}>Hours:</Text>
                                <Text>Dummy</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginVertical : 10, alignItems : 'center', marginRight : 80}}>
                                <Text style = {{color : this.props.route.params.themeColor, fontSize : 16, marginRight : 5}}>Phone:</Text>
                                <Text>{this.props.route.params.item.phone}</Text>
                            </View>
                            <Divider style = {{height : 3, backgroundColor : this.props.route.params.themeColor, marginVertical : '5%'}}/>

                            <View style = {{marginLeft : 35, flexDirection : 'column'}}>
                                <Text style = {{color : this.props.route.params.themeColor, fontSize : 20, fontWeight : 'bold'}}>TFP Rating</Text>
                                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                                    <Text style = {{color : 'black', fontSize : 26, fontWeight : 'bold'}}>{this.props.route.params.item.rating}/5</Text>
                                    <View style = {{flexDirection : 'column', marginLeft : 20}}>
                                        <View style = {{width : 100, marginRight : '5%'}}>
                                            <StarRating
                                                disabled={true}
                                                maxStars={5}
                                                rating={Number(this.props.route.params.item.rating)}
                                                fullStarColor = {'yellow'}
                                                halfStarColor = {'yellow'}
                                                emptyStarColor = {'yellow'}
                                                starSize = {15}
                                            />
                                        </View>
                                        <Text>{this.props.route.params.item.rating} Review/s</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  lottie: {
      width: 100,
      height: 100
  },
});