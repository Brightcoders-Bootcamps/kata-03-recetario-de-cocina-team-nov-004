import React,{useState,useEffect} from 'react'
import {View, StyleSheet,Image, FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,TouchableWithoutFeedback,Text} from 'react-native'


export default function Detail(props){
    const {route, navigation}= props;
    const {id,name, ruta, ingredients, category, portions}= route.params;
    // console.log(props);
 
    function onNavigation() {
        navigation.navigate('home');
      }

        return(
            <>
            <View style={styles.ViewDetail}>
                <View style={styles.ViewImage}>
                    <ImageBackground style={styles.image} source={ruta}/>
                    <View style={styles.Icons}>
                            <View  style={[ styles.cont,{justifyContent: 'space-between', paddingHorizontal: '5%'}]}>
                            <View style={{flex: 1}}>
                                <TouchableWithoutFeedback onPress={onNavigation}>
                                <Image
                                    style={styles.iconX, {marginLeft: -10}}
                                    source={require('../images/close.png')}
                                />
                                </TouchableWithoutFeedback>
                            </View>
                            <View
                                style={[ styles.cont, {justifyContent: 'space-around', justifyContent: 'flex-end'} ]}>
                                <Image
                                style={[styles.iconShare, {marginRight: 20}]}
                                source={require('../images/share.png')}
                                />
                            </View>
                         </View>
                         <View style={styles.ViewName}>
                            <Text style={[styles.textColorImage, {fontSize: 18}]}>
                                {' '}
                                {category}{' '}
                            </Text>
                            <Text style={[styles.textColorImage, {fontSize: 25}]}> {name} </Text>
                       </View>
                    </View>
                </View>
            </View>

        </>

        );
  
}

const styles =StyleSheet.create({
    ViewDetail: {
        flex: 1,
        backgroundColor: "#332F2C"
      },
    ViewImage: {
        flex: 1,
      },

     image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        opacity: 0.3,
      },
      Icons: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '-150%',
        paddingLeft: 15,
      },
      cont: {
          flex: 1, 
          flexDirection: 'row'
        },
      iconShare: {
        height: 27,
        width: 27,
      },
      iconX:{
        height:48,
        width:48,
      },

    ViewName:{
        position:"absolute",
        marginTop:190,
        marginLeft:20,
        width:"100%",
   },

   textColorImage: {
    color: 'white',
    fontWeight: '500',
  },
 
    ViewPoster:{
       
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10,
        },
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity:1,
        shadowRadius:10,
     },
 
})

