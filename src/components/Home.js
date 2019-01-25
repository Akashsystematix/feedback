import React, { Component } from 'react'
import {
    Text, View,
    StyleSheet
} from 'react-native'
import { CardViewWithImage } from 'react-native-simple-card-view';
import { Images_common } from '../common/utils'
import moment from 'moment';
import firebase from 'firebase'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            happy: 0,
            neutral: 0,
            sad: 0,
            date: moment().format("DD/MM/YYYY"),
            time: moment().format('HH:mm:ss A'),
            name: '',
            vertical: '',
            isClickedhappy: false,
            isClickedNeutral: false,
            isClickedSad: false

        }

    }

componentWillMount(){
    if(this.props.navigation.state.params != undefined){
        const emp_name = this.props.navigation.state.params.name;
      this.setState({
          name: emp_name
      })
    }
    
}

    onPressSmily(val) {
        const { happy, neutral, sad, date, time } = this.state;
        var happy_face = '';
        var neutral_face = '';
        var sad_face = '';

        if (val == 'happy') {
            happy_face = happy + 1;
            happy_face="Happy"
            this.setState({
                happy:happy_face,
                isClickedhappy: true,
                isClickedNeutral: false,
                isClickedSad: false
            });
            this.handleSubmit(happy_face);
        }
        if (val == 'neutral') {
            neutral_face = neutral + 1;
            neutral_face="Neutral"

            this.setState({
                neutral: neutral_face,
                isClickedhappy: false,
                isClickedNeutral: true,
                isClickedSad: false
            });
            this.handleSubmit(neutral_face);
        }
        if (val == 'sad') {
            sad_face = sad + 1;
            sad_face="Sad"

            this.setState({
                sad: sad_face,
                isClickedhappy: false,
                isClickedNeutral: false,
                isClickedSad: true
            });
            this.handleSubmit(sad_face);
        }


    }



    handleSubmit(mood) {
        let items = {
            name: this.state.name,
            mood:mood,
            date: this.state.date,
            time:this.state.time
        }
        this.addItem(items);
    }

    addItem = (items) => {
        var database = firebase.database().ref('mood').child(`mood/${items.name}`).push(items);       
         console.log('databaseadded' + database);
 }
     
  

    happyView() {
        return (
            <CardViewWithImage
                width={(100)}
                source={Images_common.happy_image}
                imageWidth={50}
                imageHeight={50}
                roundedImage={true}
                roundedImageValue={25}
                imageMargin={{ top: 10 }}
                content={this.state.happy.toString()}
                // onPress={() => this.setState({
                //     happy: this.state.happy + 1
                // })}
                onPress={() => this.onPressSmily('happy')}
            />
        )
    }

    happyViewdisable(){
        return(
            <CardViewWithImage
            width={(100)}
            source={Images_common.happy_image}
            imageWidth={50}
            imageHeight={50}
            roundedImage={true}
            roundedImageValue={25}
            imageMargin={{ top: 10 }}
            content={this.state.happy.toString()}
            // onPress={() => this.setState({
            //     happy: this.state.happy + 1
            // })}
           // onPress={() => this.onPressSmily('happy')}
        /> 
        )
    }

    neutralView() {
        return (

            <CardViewWithImage
                width={(100)}
                source={Images_common.neutral_mood}
                imageWidth={50}
                imageHeight={50}
                roundedImage={true}
                roundedImageValue={25}
                imageMargin={{ top: 10 }}
                content={this.state.neutral.toString()}
                // onPress={() => this.setState({
                //     neutral: this.state.neutral + 1
                // })}
                onPress={() => this.onPressSmily('neutral')}
            />
        )
    }

    neutralViewdisable(){
        return(
            <CardViewWithImage
            width={(100)}
            source={Images_common.neutral_mood}
            imageWidth={50}
            imageHeight={50}
            roundedImage={true}
            roundedImageValue={25}
            imageMargin={{ top: 10 }}
            content={this.state.neutral.toString()}
            // onPress={() => this.setState({
            //     neutral: this.state.neutral + 1
            // })}
           // onPress={() => this.onPressSmily('neutral')}
        />
        )
    }

    sadView() {
        return (
            <CardViewWithImage
                width={(100)}
                source={Images_common.sad_image}
                imageWidth={50}
                imageHeight={50}
                roundedImage={true}
                roundedImageValue={25}
                imageMargin={{ top: 10 }}
                content={this.state.sad.toString()}
                // onPress={() => this.setState({
                //     sad: this.state.sad + 1
                // })}
                onPress={() => this.onPressSmily('sad')}
            />
        )
    }

    sadViewdisable(){
        return(
            <CardViewWithImage
            width={(100)}
            source={Images_common.sad_image}
            imageWidth={50}
            imageHeight={50}
            roundedImage={true}
            roundedImageValue={25}
            imageMargin={{ top: 10 }}
            content={this.state.sad.toString()}
            // onPress={() => this.setState({
            //     sad: this.state.sad + 1
            // })}
           // onPress={() => this.onPressSmily('sad')}
        />
        )
    }


    render() {
      //  const { happy, neutral, sad, date, time } = this.state;
        // let data = { name: 'riyu', ishappy: happy, isNeutral: neutral, isSad: sad, date: date, time: time }
        //  alert(JSON.stringify(data))
        return (
            <View style={styles.container}>
                <View style={{ top: 100, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Welcome {this.state.name}!!!!
                </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>
                        What's your mood today?!
                </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 200 }}>

                    {this.state.isClickedhappy == false && this.state.isClickedNeutral == false && this.state.isClickedSad == false &&
                        <View style={{ flexDirection: 'row'}}>
                            {this.happyView()}
                            {this.neutralView()}
                            {this.sadView()}
                        </View>
                    }


                    {this.state.isClickedhappy == true && this.state.isClickedNeutral == false && this.state.isClickedSad == false &&
                       
                        <View style={{ flexDirection: 'row' }}>
                             {this.happyViewdisable() }
                            { this.neutralViewdisable()}
                            {this.sadViewdisable()}
                            </View>                      
                        }
            {this.state.isClickedhappy == false && this.state.isClickedNeutral == true && this.state.isClickedSad == false &&
                            <View style={{ flexDirection: 'row' }}>
                            {this.happyViewdisable() }
                           { this.neutralViewdisable()}
                           {this.sadViewdisable()}
                           </View>   
                        
                        }
                          {this.state.isClickedhappy == false && this.state.isClickedNeutral == false && this.state.isClickedSad == true &&
                             <View style={{ flexDirection: 'row' }}>
                             {this.happyViewdisable() }
                            { this.neutralViewdisable()}
                            {this.sadViewdisable()}
                            </View>   
                        
                        }


                </View>
            </View>
        )
    }


    registrationNavigate() {
        this.props.navigation.navigate('AuthStack')

    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#F5FCFF',


        },
        cards:
        {
            alignItems: "center",
            flexDirection: "row",
            alignSelf: 'center',
            justifyContent: 'center'
        }
    }
);