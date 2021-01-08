import React,{useState,useEffect} from 'react'
import {View, StyleSheet,Image, FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,TouchableWithoutFeedback,Text, ScrollView} from 'react-native'
 
import {LogBox} from 'react-native';


LogBox.ignoreLogs([
  'Each child in a list should have a uni',
]);

export default function Detail(props){
  const {route, navigation}= props;
  const {id,name, ruta, ingredients, category, portions}= route.params;
  // console.log(props);
 
  function onNavigation() {
    navigation.navigate('home');
  }

  const[liked,setLiked] = useState(false)

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
                <TouchableOpacity>
                  <Image
                    name='heart'
                    onPress={() =>{setLiked(!liked)}}
                    style={[styles.iconShare, {marginRight: 20, marginTop: 2,}]}
                    source={liked? require('../images/heart2.png'): require('../images/heart.png')}
                  />
                </TouchableOpacity> 
              </View>
            </View>
            <View style={styles.ViewName}>
              <Text style={[styles.textColorImage, {fontSize: 18}]}>
                {' '}
                {category}{' '}
              </Text>
              <Text style={[styles.textColorImage, {fontSize: 25}]}> {name} </Text>
            </View>
            <View style={styles.ViewIngredients}>
              <Text style={[styles.textColorImage, {fontSize: 18}]}>Ingredients</Text>
              <Text style={[styles.textColorImage, {fontSize: 16}]}>for {portions} servings</Text>     
              <ScrollView style={styles.scrollList}>
                  {
                    ingredients.map((item) => {
                      return (
                      <View style={styles.viewList} key={item.key}>
                        <Text style={styles.textIngredient}>{item.ingredient}</Text> 
                        <Text style={styles.textIngredient}>{item.quantity}</Text> 
                      </View>
                      )
                      })
                  }
            </ScrollView>       
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
        backgroundColor: "#282828"
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
        marginTop: '-180%',
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
        marginTop:230,
        marginLeft:10,
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
      ViewIngredients:{
        position:"absolute",
        marginTop:350,
        marginLeft:20,
        width:"100%",
      },
      scrollList:{
        height: 200,
        marginTop: 10
      },
      viewList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 50,
        marginTop: 35,
        marginBottom: 0,
        paddingBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#3C3C3C'
      },
      textIngredient:{
        color: 'white'
      }
})

