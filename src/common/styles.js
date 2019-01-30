const React = require('react-native')
import{Dimensions} from 'react-native';
const {StyleSheet} = React
let {width, height} = Dimensions.get('window')
const constants = {
  actionColor: '#1C246F'
};

var styles = StyleSheet.create({container: {
    flex: 1,
    width:width,
    height:height
  },
  logoContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  
  
  logo: {

    flex: 1,
  width: width-80,
    height: '100%',
    resizeMode: 'contain'
  },
  title: {
    color: '#302b63',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    opacity: 0.9
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    height: '7%',
    width:'90%',
    bottom:220
    // backgroundColor: 'red'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#646FA4',
    color: 'black',
    justifyContent:'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight:'500',
    height: '100%',
    width:'100%',
    opacity: 0.75
  },

  error: {

    borderWidth: 0.5,
    borderColor: 'red',
    width:'91%'


  },

  buttonContainer: {
    backgroundColor: '#560F71',
    padding:10,
    justifyContent:'center',
    left: 20,
    right: 20,
    width:'90%',
    bottom: 200

  },
  phone_icon:{
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
},

  loginbg: {
    height: height,
    width: width,
 },
  buttonText:
      {textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 13}
});


module.exports = styles
module.exports.constants = constants;
