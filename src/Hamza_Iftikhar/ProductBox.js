import React from "react";

import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

export default class MyText extends React.Component
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
                    if(this.props.item.thumbnail4.length === 0)
                    {
                        imageUrl = require('./Images/image_pro_5.png');
                    }
                    else
                    {
                        imageUrl = this.props.item.thumbnail4;
                    }
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
            imageUrl = this.props.item.thumbnail;
        }

        return (
            <TouchableOpacity style = {[styles.container, styles.boxWithShadow]} onPress = {() => Alert.alert(this.props.item.name, "$" + this.props.item.price)}>
                <View style = {styles.innerContainer}>
                    <Image style={styles.image} source={{uri : imageUrl}} resizeMethod = {'auto'} resizeMode = {'cover'}/>
                    <Text style = {{marginTop : 5}}>
                        {this.props.item.name}
                    </Text>
                    <Text style = {[styles.text, {color : this.props.themeColor}]}>
                        ${this.props.item.price}
                    </Text>
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
            height : 250,
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
            borderRadius: 4,
            margin : 15,
            height : 150, width : 150,
        }
    }
);