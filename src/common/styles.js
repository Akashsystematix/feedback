const React = require('react-native')
import{Dimensions} from 'react-native';
const {StyleSheet} = React
let {width, height} = Dimensions.get('window')
const constants = {
  actionColor: '#1C246F'
};

var styles = StyleSheet.create({container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  logo: {
    width: 128,
    height: 128,
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
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    // backgroundColor: 'red'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#646FA4',
    borderWidth: 1,
    color: 'purple',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.75
  },

  error: {

    borderWidth: 1,
    borderColor: 'red'


  },

  buttonContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    left: 0,
    right: 0,
    bottom: 0

  },
  gradient: {
    height: height,
    width: width,
    flex: 1,


  },
  buttonText:
      {textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 13}
});


module.exports = styles
module.exports.constants = constants;
