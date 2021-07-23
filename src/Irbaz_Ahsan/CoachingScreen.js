import * as React from 'react';
import { View, TouchableOpacity, Image, Text, Alert, FlatList, ScrollView, StyleSheet, ImageBackground, Button,
  ToastAndroid, Dimensions } from 'react-native';
import MyHeader from '../Hamza_Iftikhar/MyHeader.js';

var {width, height} = Dimensions.get('window');

export default class CoachingScreen extends React.Component {

    submitLiveCoaching()
    {
      this.props.navigation.navigate('Payment', 
        {
          themeColor : this.props.route.params.themeColor, token : this.props.route.params.token, userId : this.props.route.params.userId, email : this.props.route.params.email
        }
      )

    }

    submitPhysicalCoaching()
    {
      this.props.navigation.navigate('Payment', 
        {
          themeColor : this.props.route.params.themeColor, token : this.props.route.params.token, userId : this.props.route.params.userId, email : this.props.route.params.email
        }
      )
    }

    render()
    {
      return(
        <View style = {styles.mainContainer}>
          <MyHeader themeColor = {this.props.route.params.themeColor} navigation = {this.props.navigation} homeScreen = {false}/>
          <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.headerTop}>
              <Text style={styles.textTop} adjustsFontSizeToFit numberOfLines={2}>Physical Coaching not available for now due to current pandemic. Thank you.</Text>
            </View>

            <View style = {styles.bodyContainer}>
              <View style = {styles.columnContainer}>
                <Text>Live Coaching</Text>
                <View style = {styles.iconContainer}>
                  <Image style = {styles.iconImage} source = {require('./assets/Second.png')} resizeMode = "cover"/>
                </View>
                <View style = {styles.backgroundImageContainer}>
                  <ImageBackground style = {styles.backgroundImage} source={require('./assets/First.png')} resizeMode="cover">
                    <View style = {{height : width * 0.3, marginTop : width * 0.35 * 0.5, marginHorizontal : 10}}>
                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 5000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/4 session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 20000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/5 session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 25000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Duration </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 60 Minutes </Text>
                    </View>
                    <TouchableOpacity style = {styles.submitButton} onPress = {() => this.submitLiveCoaching()}>
                        <Text style={{color:this.props.route.params.themeColor, fontWeight: 'bold', fontSize: 16}} adjustsFontSizeToFit numberOfLines={1}>
                          SUBMIT
                        </Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>
              <View style = {styles.columnContainer}>
                <Text>Physical Coaching</Text>
                <View style = {styles.iconContainer}>
                  <Image style = {styles.iconImage} source = {require('./assets/Third.png')} resizeMode = "cover"/>
                </View>
                <View style = {styles.backgroundImageContainer}>
                  <ImageBackground style = {styles.backgroundImage} source={require('./assets/First.png')} resizeMode="cover">
                  <View style = {{height : width * 0.3, marginTop : width * 0.35 * 0.5, marginHorizontal : 10}}>
                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 5000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/4 session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 20000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Price/5 session </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 25000 </Text>

                      <Text style = {[styles.labelText, {textAlign : 'left'}]} adjustsFontSizeToFit numberOfLines={1}> Duration </Text>
                      <Text style = {[styles.labelText, {textAlign : 'right'}]} adjustsFontSizeToFit numberOfLines={1}> 60 Minutes </Text>
                    </View>
                    <TouchableOpacity style = {styles.submitButton} onPress = {() => this.submitLiveCoaching()}>
                        <Text style={{color:this.props.route.params.themeColor, fontWeight: 'bold', fontSize: 16}} adjustsFontSizeToFit numberOfLines={1}>
                          SUBMIT
                        </Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : 'white'
  },
  headerTop : {
    marginVertical : 20,
    backgroundColor: 'lightgrey',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf : 'center'
  },
  textTop: {
    fontSize: width / 24,
    textAlign : 'center'
  },
  bodyContainer : {
    flexDirection : 'row',
    width : '90%',
    justifyContent: 'space-around',
    alignSelf : 'center'
  },
  columnContainer : {
    flexDirection : 'column',
    alignItems : 'center',
    width : '100%'
  },
  iconContainer:
  {
    width : width * 0.3,
    height : width * 0.3
  },
  iconImage : {
    height : '100%',
    width : '100%',
    overflow : 'visible'
  },
  backgroundImageContainer : 
  {
    marginTop : -30,
    width : width * 0.35,
    height : width * 0.7
  },
  backgroundImage : {
    height : '100%',
    width : '100%',
    overflow : 'visible'
  },
  labelText : {
    fontSize: width / 36,
    color:'white',
  },
  submitButton : {
    marginVertical : 15,
    alignItems:'center',
    backgroundColor : 'white',
    borderTopLeftRadius : 5,
    borderBottomRightRadius : 5,
    borderWidth : 1,
    borderColor : 'white',
    width : width * 0.35 * 0.4,
    height : width * 0.7 * 0.1,
    alignContent : 'center',
    justifyContent : 'center',
    alignSelf : 'center'
  }    
});