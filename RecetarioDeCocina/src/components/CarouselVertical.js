import React, {useState, useEffect} from 'react';
import {StyleSheet,View, Image,Dimensions, TouchableWithoutFeedback,Text } from 'react-native';
import Carousel  from 'react-native-snap-carousel';


const {width}=Dimensions.get("window");
const ITEM_WIDTH=Math.round(width * 0.7);

export default function CarouselVertical(props){
    const {data} = props;
    return(
      <Carousel
      layout="default" 
      data={data}
      renderItem= {(item) => <RenderItem  data={item}/> }
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
      />

    )
}

function RenderItem(props){
const {data} =props;
const{ name, ruta} =data.item;

//console.log(props);
return(
    <TouchableWithoutFeedback onPress={() =>console.log('Hola')}>
        <View style={styles.card}>
            <Image style={styles.image} source={ruta}/>
            <Text style={{color:'#fff'}}>{name}</Text>
        </View>
    </TouchableWithoutFeedback>
)
}

const styles =StyleSheet.create({
    card:{
       shadowColor:"#000",
       shadowOffset:{
           width:0,
           height:10,
       },
       alignItems:'center',
       shadowOpacity:1,
       shadowRadius:10,
    },
    image:{
       width: "90%",
       height: 200,
       borderRadius: 20,
    },


})