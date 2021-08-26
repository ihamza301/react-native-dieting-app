import React from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';

import { Searchbar } from 'react-native-paper';

import MyHeader from '../MyHeader.js'

import ProductBox from '../ProductBox.js'

import AnimatedLoader from "react-native-animated-loader";

import axios from 'axios';

export default class ProductScreen extends React.Component
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

        axios.get('https://thefoodpharmacy.general.greengrapez.com/api/auth/search/product/by/' + this.props.route.params.subCategory, {headers}).
        then(response => {
            if(response.data["status"] === "okay"){
                if(response.data['response']['message'] == 'successful')
                {
                    this.setState({products : response.data['response']['Products']});
                    this.setState({dataFound : true});
                }
                else if(response.data['response']['message'] == 'unSuccessful')
                {
                    this.setState({dataFound : false});
                }
                
                this.setState({visible:false});
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
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_1.png')
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_2.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_3.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d73',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_4.png')
            },
            {
              id: 'bd7acbea-c1b1-66c2-aed5-3ad53abb28ba',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_5.png')
            },
            {
              id: '3ac68afc-c605-4863-a4f8-fbd91aa97f63',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_1.png')
            },
            {
              id: '58694a0f-3da1-476f-bd96-145571e29d72',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_2.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-645571e29d73',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_3.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-645571329d73',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_4.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-645573e29d73',
              title: 'Turpis et iaculis',
              price : '115.00',
              url : require('../Images/image_pro_5.png')
            }
          ];

        const renderItem = ({ item }) => (
            <ProductBox item={item} themeColor = {this.props.route.params.themeColor} />
        );

        return(
          <View style = {{flex : 1}}>
                <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} token = {this.props.route.params.token} homeScreen = {true}/>

                {this.state.visible?(
                    <AnimatedLoader
                        visible={this.state.visible}
                        overlayColor="rgba(255,255,255,0.75)"
                        source={require("../loader.json")}
                        animationStyle={styles.lottie}
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
                    Product
                </Text>
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