import React from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';

import MyHeader from '../MyHeader.js'

import RecommendationBox from './RecommendationBox.js';

import AnimatedLoader from "react-native-animated-loader";

import axios from 'axios';

export default class RecommendationScreen extends React.Component
{   

  constructor(props)
    {
        super(props);

        this.state = {
            visible : false,
            dataFound : false,
            recommendations : []
        };
    }

    fetchDataFromAPI()
    {
        this.setState({dataFound : false});
        this.setState({visible:true});

        const headers = { 
            'Authorization': 'Bearer ' + this.props.route.params.token,
            'content-type':'application/json'
        };

        axios.get('https://thefoodpharmacy.general.greengrapez.com/api/auth/recommendation/' + this.props.route.params.category, {headers}).
        then(response => {
            if(response.data["status"] === "successful"){
                if(response.data['response']['message'] == 'successful')
                {
                    this.setState({recommendations : response.data['response']['recommendation']});
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
        const renderItem = ({ item }) => (
            <RecommendationBox item={item} themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation}/>
        );

        return(
          <View style = {{flex : 1, backgroundColor : 'white'}}>
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
                    data={this.state.recommendations}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent = {<FlatListHeader themeColor = {this.props.route.params.themeColor}/>}
                />
                ) : (
                    <View>
                        <Text style = {{fontWeight : 'bold', fontSize : 20, alignSelf : 'center', textAlign : 'center', marginTop : '50%'}}>No recommendations found.</Text>
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
                <Text style = {{marginHorizontal : '5%', marginVertical : 10, color : this.props.themeColor, fontSize : 15}}>
                    TFP Recommendation
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