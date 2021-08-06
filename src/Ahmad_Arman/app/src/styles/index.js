import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  
  inputContainer: {
    flexDirection: 'row', 
    marginTop: 20,
    alignContent : 'space-between',
    justifyContent :'space-between'
  },
  
  input: {
    color: 'black',
    marginLeft : 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
    backgroundColor : 'white'
  },

  inputIcon: {
    marginTop: 15,
  },
    
    btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  btnSecondarySignUp: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  btnSecondary: {
    height: 35,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {
    width: 20, 
    height: 20, 
    marginLeft: 5
  },

  line: {
    height: 1, 
    width: 30, 
    backgroundColor: '#a5a5a5'
  },
});

export default STYLES;
