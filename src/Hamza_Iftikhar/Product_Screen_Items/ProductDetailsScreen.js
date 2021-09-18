import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import InputSpinner from "react-native-input-spinner";

import MyHeader from '../MyHeader';

export default class ProductDetailsScreen extends React.Component
{
    constructor(props)
    {
        super(props);

        var obtainedImages = [];
        if(this.props.route.params.item.thumbnail != 0)
        {
            obtainedImages.push(this.props.route.params.item.thumbnail);
        }
        if(this.props.route.params.item.thumbnail2 != 0)
        {
            obtainedImages.push(this.props.route.params.item.thumbnail2);
        }
        if(this.props.route.params.item.thumbnail3 != 0)
        {
            obtainedImages.push(this.props.route.params.item.thumbnail3);
        }
        if(this.props.route.params.item.thumbnail4 != 0)
        {
            obtainedImages.push(this.props.route.params.item.thumbnail4);
        }
        if(obtainedImages.length === 0)
        {
            obtainedImages.push(require('../Images/image_pro_5.png'));
        }

        this.state = 
        {
            images : obtainedImages,
            selectedQuantity : 1
        };
    }

    isProductOutOfStock()
    {
        return this.stockCount() <= 0;
    }

    stockCount()
    {
        return this.props.route.params.item.quantity_on_hand === null ? 0 : this.props.route.params.item.quantity_on_hand;
    }

    render()
    {
        return(
            <SafeAreaView style = {styles.safeAreaView}>
                <View style = {styles.mainContainer}>
                    <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} token = {this.props.route.params.token} homeScreen = {true}/>

                    <ScrollView showsVerticalScrollIndicator = {false}>
                        <Text style = {[styles.detailText, {color : this.props.route.params.themeColor}]}>Products Detail:</Text>
                        <View style = {styles.contentContainer}>
                            <View style = {styles.productDetailsView}>
                                <Text style = {[styles.itemName, {color : this.props.route.params.themeColor}]}>{this.props.route.params.item.name}</Text>
                                <View style = {styles.imageSliderBox}>
                                    <SliderBox images={this.state.images} sliderBoxHeight = {250} parentWidth = {300} dotColor = {this.props.route.params.themeColor} imageLoadingColor = {this.props.route.params.themeColor} resizeMethod = {'auto'}/>
                                </View>
                            </View>
                            <View style = {styles.orderView}>
                                <TouchableOpacity onPress = {() => Alert.alert('Available soon')}>
                                    <Text style = {[styles.vendorInfo, {color : this.props.route.params.themeColor}]}>Vendor Info</Text>
                                </TouchableOpacity>
                                <Text style = {styles.price}>${this.props.route.params.item.price}</Text>
                            </View>
                            <View style = {styles.quantityView}>
                                <View style = {{flexDirection : 'row', marginVertical : 5}}>
                                    <Text style = {{alignSelf : 'center', fontSize : 18, marginRight : 10}}>Quantity :</Text>
                                    <InputSpinner
                                        disabled = {this.isProductOutOfStock()}
                                        max={this.stockCount() > 10 ? 10 : this.stockCount()}
                                        min={1}
                                        longStep = {this.stockCount() > 10 ? 10 : this.stockCount()}
                                        colorMax={'red'}
                                        colorMin={this.isProductOutOfStock() ? 'lightgrey' : this.props.route.params.themeColor}
                                        color = {this.isProductOutOfStock() ? 'lightgrey' : this.props.route.params.themeColor}
                                        height = {35}
                                        fontSize = {14}
                                        value = {this.state.selectedQuantity}
                                        onChange={(num) => {
                                            this.setState({selectedQuantity : num});
                                        }}
                                    />
                                </View>
                                {this.isProductOutOfStock() ? (
                                    <Text style = {{color : 'red', marginVertical : 5}}>Out of Stock</Text>
                                ) : null}
                                <View style = {{flexDirection : 'row', marginVertical : 5}}>
                                    <Text style = {{alignSelf : 'center', fontSize : 18, marginRight : 10}}>Size : {this.props.route.params.item.size}</Text>
                                </View>
                            </View>
                            <View style = {styles.buttonsView}>
                                <TouchableOpacity style = {[styles.button, {backgroundColor : this.isProductOutOfStock() ? 'lightgrey' : this.props.route.params.themeColor}]} onPress = {() => Alert.alert('Available soon')} disabled = {this.isProductOutOfStock()}>
                                    <Text style = {styles.buttonText}>Add to Cart</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.button, {backgroundColor : this.props.route.params.themeColor}]} onPress = {() => Alert.alert('Available soon')}>
                                    <Text style = {styles.buttonText}>Add to Wishlist</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeAreaView : 
    {
        backgroundColor : 'white',
        flex : 1
    },
    mainContainer : 
    {
        flex : 1
    },
    contentContainer : 
    {
        flex : 1,
        marginHorizontal : 30
    },
    detailText : 
    {
        fontSize : 18,
        margin : 10
    },
    productDetailsView : 
    {
        flexDirection : 'column',
        alignItems : 'center',
    },
    itemName : 
    {
        fontWeight : 'bold',
        fontSize : 22,
        marginVertical : 10
    },
    imageSliderBox : 
    {
        height : 250,
        width : 300, 
    },
    orderView : 
    {

    },
    vendorInfo : 
    {
        fontSize : 13,
        marginTop : 15
    },
    price : 
    {
        fontSize : 24,
        marginVertical : 5
    },
    quantityView : 
    {
        flexDirection : 'column',
        //justifyContent : 'space-around',
        marginVertical : 20,
        marginHorizontal : 10
    },
    buttonsView : 
    {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : 50,
        marginHorizontal : 10
    },
    button : 
    {
        height : 40, 
        width : 140,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    spinnerButton : 
    {
        height : 30,
        alignItems : 'center'
    },
    buttonText : 
    {
        fontSize : 16,
        color : 'white'
    }
});