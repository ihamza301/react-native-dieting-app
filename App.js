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
import ProductDetailsScreen from './src/Hamza_Iftikhar/Product_Screen_Items/ProductDetailsScreen.js';
import CartDetailsScreen from './src/Hamza_Iftikhar/Product_Screen_Items/CartDetailsScreen.js';
import CheckAddressScreen from './src/Hamza_Iftikhar/Product_Screen_Items/CheckAddressScreen.js';
import AddNewAddressScreen from './src/Hamza_Iftikhar/Product_Screen_Items/AddNewAddressScreen.js';
import PaymentOptionsScreen from './src/Hamza_Iftikhar/Product_Screen_Items/PaymentOptionsScreen.js';
import PaymentSubmitScreen from './src/Hamza_Iftikhar/Product_Screen_Items/PaymentSubmitScreen.js';
import ProductsMenuCategory from './src/Hamza_Iftikhar/Product_Screen_Items/ProductsMenuCategory';
import ProductsMenuSubCategory from './src/Hamza_Iftikhar/Product_Screen_Items/ProductsMenuSubCategory';
import AddressAndDetailScreen from './src/Hamza_Iftikhar/AddressAndDetailScreen.js';
import ContactUsScreen from './src/Hamza_Iftikhar/ContactUsScreen.js';
import RecommendationMenuCategory from './src/Hamza_Iftikhar/Recommendation_Screen_Items/RecommendationMenuCategory.js';
import RecommendationScreen from './src/Hamza_Iftikhar/Recommendation_Screen_Items/RecommendationScreen.js';
import RecommendationDetailsScreen from './src/Hamza_Iftikhar/Recommendation_Screen_Items/RecommendationDetailsScreen.js';

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
          <SideMenuDrawer.Screen name="Products-Menu-Category" component={ProductsMenuCategory} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Products-Menu-Sub-Category" component={ProductsMenuSubCategory} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Products-Screen" component={ProductScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Product-Detail-Screen" component={ProductDetailsScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="CartDetailsScreen" component={CartDetailsScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="CheckAddressScreen" component={CheckAddressScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="AddNewAddressScreen" component={AddNewAddressScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="PaymentOptionsScreen" component={PaymentOptionsScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="PaymentSubmitScreen" component={PaymentSubmitScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Coaching" component={coachingStackScreens} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Recommendation-Menu" component={RecommendationMenuCategory} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Recommendation-Screen" component={RecommendationScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
          <SideMenuDrawer.Screen name="Recommendation-Detail-Screen" component={RecommendationDetailsScreen} initialParams = {{themeColor : props.route.params.themeColor, token : props.route.params.token, userId : props.route.params.userId, email : props.route.params.email, name : props.route.params.name}}/>
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