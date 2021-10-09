import React from 'react';
import {
    Text,
    FlatList,
    View,
    Alert
} from 'react-native';

import { Searchbar } from 'react-native-paper';

import MyHeader from '../MyHeader.js'

import ProductBox from '../ProductBox.js'

import AnimatedLoader from "react-native-animated-loader";

import axios from 'axios';

export default class WishlistScreen extends React.Component
{
  constructor(props)
    {
        super(props);

        this.state = {
            visible : false,
            dataFound : false,
            searchQuery : '',
            products : []
        };
    }

    onChangeSearch = (query) =>
    {
        this.setState({searchQuery : query})
    }

    fetchDataFromAPI()
    {
        this.setState({dataFound : false});
        this.setState({visible:true});

        const headers = { 
            'Authorization': 'Bearer ' + this.props.route.params.token,
            'content-type':'application/json'
        };

        axios.get('https://thefoodpharmacy.general.greengrapez.com/api/auth/get/all/wishlist/' + this.props.route.params.userId, {headers}).
        then(response => {
            if(response.data["status"] === "successful"){
                if(response.data['response']['message'] == 'successful')
                {
                  let list = response.data['response']['Products'];
                  let obtainedProducts = [];
                  for(let i = 0; i < list.length; i++)
                  {
                    let product = list[i];
                    axios.get('https://thefoodpharmacy.general.greengrapez.com/api/auth/product/detail/' + product.product_id, {headers}).
                    then(newResponse => {
                      if(newResponse.data["status"] === "okay"){
                        if(newResponse.data['response']['message'] == 'successful')
                        {
                          obtainedProducts.push(newResponse.data['response']['Product'][0]);

                          if(i == list.length - 1)
                          {
                            this.setState({dataFound : obtainedProducts.length > 0});
                            this.setState({products : obtainedProducts});
                            this.setState({visible:false});
                          }
                        }
                        else if(newResponse.data['response']['message'] == 'unSuccessful')
                        {
                          this.setState({dataFound : false});
                        }
                      }
                      else if(newResponse.data["status"] === "error")
                      {
                        console.log('Error is =',newResponse.data["response"]["message"]);
                        this.setState({visible:false});
                        this.setState({dataFound : false});
                      }
                    }).
                    catch(error => {
                      Alert.alert("Error", error.message);
                      this.setState({visible:false});
                      this.setState({dataFound : false});
                    });
                  }
                }
                else if(response.data['response']['message'] == 'unSuccessful')
                {
                  this.setState({dataFound : false});
                  this.setState({visible:false});
                }
            }else if(response.data["status"] === "error"){
              console.log('Error is =',response.data["response"]["message"]);
              this.setState({visible:false});
              this.setState({dataFound : false});
            }
        }).
        catch(error => {
          Alert.alert("Error", error.message);
          this.setState({visible:false});
          this.setState({dataFound : false});
        });
    }

    componentDidMount() {
        this.unsubscribeFocus  = this.props.navigation.addListener('focus', () => {
            this.fetchDataFromAPI();
        });
    }
    
    componentWillUnmount() {
        this.unsubscribeFocus();
    }

    render()
    {
        const renderItem = ({ item }) => (
            <ProductBox item={item} themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} fromWishlist = {true}/>
        );

        return(
          <View style = {{flex : 1}}>
                <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} token = {this.props.route.params.token} homeScreen = {true}/>

                {this.state.visible?(
                    <AnimatedLoader
                        visible={this.state.visible}
                        overlayColor="rgba(255,255,255,0.75)"
                        source={require("../loader.json")}
                        animationStyle={{height : 100, width : 100}}
                        speed={1}
                    >
                        <Text> Processing...</Text>
                    </AnimatedLoader>            
                    ):(null)
                }

                {this.state.dataFound ? (
                    <FlatList
                    style = {{margin : 10, backgroundColor : "#fff"}}
                    data={this.state.products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns = {2}
                    ListHeaderComponent = {<FlatListHeader themeColor = {this.props.route.params.themeColor} onChangeSearch = {this.onChangeSearch} searchQuery = {this.state.searchQuery}/>}
                />
                ) : (
                    <View>
                        <Text style = {{fontWeight : 'bold', fontSize : 20, alignSelf : 'center', textAlign : 'center', marginTop : '50%'}}>No products found.</Text>
                    </View>
                )}
            </View>
        );
    }
}

class FlatListHeader extends React.Component
{
    render()
    {
        return(
            <View>
                <Searchbar
                    placeholder = "Product Name"
                    iconColor = {this.props.themeColor}
                    style = {{marginHorizontal : 20, marginVertical : 10, padding : 1}}
                    onChangeText={this.props.onChangeSearch}
                    value={this.props.searchQuery}
                    />
                <Text style = {{marginHorizontal : 30, marginVertical : 10, color : this.props.themeColor, fontSize : 15}}>
                    Wishlist
                </Text>
            </View>
        );
    }
}