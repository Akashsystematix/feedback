import React, { Component } from 'react'
import {
    Text, View,
    StyleSheet,AsyncStorage,Button,Dimensions,
    ImageBackground,Image,ScrollView,
} from 'react-native'
import { CardViewWithImage } from 'react-native-simple-card-view';
import { Images_common } from '../common/utils'
import moment from 'moment';
import firebase from 'firebase'
import PieChart from 'react-native-pie-chart';
import LinearGradient from 'react-native-linear-gradient';
let { width, height } = Dimensions.get('window')


let todaysDate=moment().format("DD/MM/YYYY");

 
export default class Home extends Component {

    static navigationOptions = {
        title: 'Rate Your Mood',
        headerRight: (
          <Button
            onPress={this.signOutAsync}
            title="Logout"
            fontWeight="bold"
            color="#CFDFD8"

          />
        ),
        headerTintColor: '#CFDFD8',
        headerStyle:{
            backgroundColor:'#579BE6'
            
            
            }
    

      };

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
            isClickedSad: false,
            moodData:[],
            isEnabled:true,
            currentMood:'',
            currentMoodAlternate:0,
            items: [],
            userInAsync:false

        }

    }






componentWillMount(){
    var  userMood_Data=[];
    let userArray_detail=[];
    if(this.props.navigation.state.params != undefined){
        const emp_name = this.props.navigation.state.params.name;

      this.setState({
          name: emp_name
      })
      

    }
    else{
         emp_name =AsyncStorage.getItem('userMoodData').then((value) => {
            if (value != null) {
               userMood_Data = JSON.parse(value);
            this.setState({name: userMood_Data[0].name})
            }
            else{
                AsyncStorage.getItem('userDetail').then((value) => {
                    if (value != null) {
                        userArray_detail = JSON.parse(value);
                    this.setState({name: userArray_detail[0].name})
            }
        }).done(
            );
            }
        }).done(
            );
       

    }

    AsyncStorage.getItem('userMoodData').then((value) => {
        if (value != null) {
           userMood_Data = JSON.parse(value);
console.log('userMood_Data=====>'+JSON.stringify(userMood_Data))
             if(todaysDate!=userMood_Data[0].date){

        AsyncStorage.removeItem('userMoodData');
        userMood_Data=[];
       this.setState({isEnabled:true,currentMood:''}) ;
      }
      else{
          this.setState({isEnabled:false,currentMood:userMood_Data[0].mood}) ;

      }
        }
        else {

        }
      }).done(
      );
    
}

componentDidMount() {
    AsyncStorage.getItem('userMoodData').then((value) => {
        if (value != null) {
           userMood_Data = JSON.parse(value);

             if(todaysDate!=userMood_Data[0].date){

        AsyncStorage.removeItem('userMoodData');
        userMood_Data=[];
       this.setState({isEnabled:true}) ;
      }
      else{
          this.setState({isEnabled:false}) ;

      }
        }
        else {
        }
      }).done(
      );

firebaseData=()=>{

 firebase
.database().ref(`mood/${items.name}`)
.on("child_added", snapshot => {
let data = snapshot.val();
let keys = Object.keys(data);
keys.forEach((key) => { console.log('Snapshotkey=====>' + snapshot.key) });
 snap = snapshot.key;
console.log('Snap' + snap);
if (data) {
 this.setState(prevState => ({
items: [data, ...prevState.items]

}))
}
});
console.log("data====>"+JSON.stringify(items))
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



    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthStack');
      };


    handleSubmit(mood) {
        let items = {
            name: this.state.name,
            mood:mood,
            date: this.state.date,
            time:this.state.time
        }
        this.addItem(items);
        this.setState({moodData:items})
        this.state.moodData.push({'name':this.state.name,'mood':mood,date:this.state.date,time:this.state.time})
            AsyncStorage.setItem('userMoodData', JSON.stringify(this.state.moodData));
            console.log('userMoodData========>+'+JSON.stringify(this.state.moodData));
      
          }
      
    

   


    addItem = (items) => {
        var database = firebase.database().ref(`mood/${items.name}`).push(items);       
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
            content={this.state.isEnabled==true?this.state.happy.toString():this.state.currentMood=='Happy'?this.state.currentMood:this.state.currentMoodAlternate}
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
            content={this.state.isEnabled==true?this.state.neutral.toString():this.state.currentMood=='Neutral'?this.state.currentMood:this.state.currentMoodAlternate}
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
            content={this.state.isEnabled==true?this.state.sad.toString():this.state.currentMood=='Sad'?this.state.currentMood:this.state.currentMoodAlternate}
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

        const chart_wh = 150
    const series = [123, 321]
    const sliceColor = ['#F44336','#2196F3']
        return (
            <ImageBackground style={styles.imgbg} source={Images_common.home_bg}>

            <ScrollView style={styles.container}>



        {/* <LinearGradient colors={['#005AA7', '#FFFDE4' ]} style={styles.gradient} > */}
        <Image style={styles.logo} source={Images_common.login_logo}></Image>

                <View style={{ top: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Welcome {this.state.name}!!
                </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>
                        What's your mood today?
                </Text>
                </View>

                <View style={{ flexDirection: 'row',top: 100 ,justifyContent:'center',alignItems:"center"}}>
                {this.state.isEnabled==true && this.state.isClickedhappy == false && this.state.isClickedNeutral == false && this.state.isClickedSad == false &&

                        <View style={{ flexDirection: 'row'}}>
                            {this.happyView()}
                            {this.neutralView()}
                            {this.sadView()}
                        </View>
                    }
                      {this.state.isEnabled==false &&
                            <View style={{ flexDirection: 'row'}}>
                            {this.happyViewdisable() }
                            { this.neutralViewdisable()}
                            {this.sadViewdisable()}
                        </View>
                        }

{ this.state.isClickedhappy == true && this.state.isClickedNeutral == false && this.state.isClickedSad == false &&

                       
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
                          { this.state.isClickedhappy == false && this.state.isClickedNeutral == false && this.state.isClickedSad == true &&
                             <View style={{ flexDirection: 'row' }}>
                             {this.happyViewdisable() }
                            { this.neutralViewdisable()}
                            {this.sadViewdisable()}
                            </View>   
                        
                        }

                </View>
        <PieChart style={styles.pieChart}
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.5}
            coverFill={'#FFF'}
          />
       </ScrollView>
            </ImageBackground>

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


        },
        imgbg: {
            height:height,
            width: width,
            flex: 1,
            flexDirection:'column'
    
    
        },
        cards:
        {
            alignItems: "center",
            flexDirection: "row",
            alignSelf: 'center',
            justifyContent: 'center',
        },
        pieChart:
        {
            top:'35%',
            justifyContent:'space-around',
            alignItems:'center',
            alignSelf:'center'
    },
    logo: {
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        top:10,
        width: '75%',
        resizeMode: 'contain'
      },
    
}
);

