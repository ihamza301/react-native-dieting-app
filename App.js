import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from './src/Ahmad_Arman/app/src/views/screens/SignInScreen.js'
import SignUpScreen from './src/Talha_Maqsood/SignUpScreen.js'
import CoachingHomeScreen from './src/Muhammad_Hamza/CoachingHomeScreen.js'
import CoachingScreen from './src/Irbaz_Ahsan/CoachingScreen.js'
import PaymentScreen from './src/Saboor_Malik/PaymentScreen.js'
import HealthHistoryScreen from './src/Hamza_Iftikhar/HealthHistoryScreen.js'
import ComingSoonScreen from './src/Hamza_Iftikhar/ComingSoonScreen';
import SideMenuContentComponent from './src/Hamza_Iftikhar/SideMenuContentComponent'
import DietPlanScreen from './src/Muhammad_Sharjeel/DietPlanScreen.js'
import WishlistScreen from './src/Hamza_Iftikhar/Wishlist_Screen_Items/WishlistScreen';
import ProductScreen from './src/Hamza_Iftikhar/Product_Screen_Items/ProductScreen';
import ProductsMenu from './src/Hamza_Iftikhar/Product_Screen_Items/ProductsMenu';
import AddressAndDetailScreen from './src/Hamza_Iftikhar/AddressAndDetailScreen.js';
import ContactUsScreen from './src/Hamza_Iftikhar/ContactUsScreen.js';

import { Provider } from 'react-native-paper';

const BasicScreensStack = createStackNavigator();
const SideMenuDrawer = createDrawerNavigator();
const CoachingScreensStack = createStackNavigator();

export default class App extends React.Component {  

  themeColor = '';

  constructor(props)
  {
    super(props);

    this.themeColor = '#1f8e46';
  }

  render() {

    const coachingStackScreens = (props) =>
    {
      return(
        <CoachingScreensStack.Navigator initialRouteName = 'Coaching-Home' headerMode = 'none'>
          <CoachingScreensStack.Screen name = 'Coaching-Home' component = {CoachingHomeScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <CoachingScreensStack.Screen name= 'Select' component={CoachingScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <CoachingScreensStack.Screen name= 'Payment' component={PaymentScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <CoachingScreensStack.Screen name= 'Health' component={HealthHistoryScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <CoachingScreensStack.Screen name= 'Diet' component={DietPlanScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
        </CoachingScreensStack.Navigator>
      );
    }

    const sideMenuDrawerScreens = (props) =>
    {
      return(
        <SideMenuDrawer.Navigator initialRouteName = "Home" drawerContent = {(props) => <SideMenuContentComponent {...props}/>}>
          <SideMenuDrawer.Screen name="Home" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Products-Menu" component={ProductsMenu} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Products-Screen" component={ProductScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Coaching" component={coachingStackScreens} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Recommendation" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Sale" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Orders" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="FAQ" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Blog" component={ComingSoonScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Contact" component={ContactUsScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Address" component={AddressAndDetailScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Wishlist" component={WishlistScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
        </SideMenuDrawer.Navigator>
      );
    }

    const basicStackScreens = () =>
    {
      return(
        <BasicScreensStack.Navigator initialRouteName = "SignIn" headerMode = 'none'>
          <BasicScreensStack.Screen name="SignIn" component={SignInScreen} initialParams = {{themeColor : this.themeColor}}/>
          <BasicScreensStack.Screen name="SignUp" component={SignUpScreen} />
          <BasicScreensStack.Screen name="AfterLogIn" component={sideMenuDrawerScreens}/>
        </BasicScreensStack.Navigator>
      );
    }

      return(
        <Provider>
          <NavigationContainer>
            {basicStackScreens()}
          </NavigationContainer>
        </Provider>
      );
  }  
}