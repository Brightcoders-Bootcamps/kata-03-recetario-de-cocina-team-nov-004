import React,{useState,useEffect} from 'react'
import {View, StyleSheet,Image,Text} from 'react-native'


export default function Detail(props){
    const {route}= props;
    const {id,name, ruta, ingredients,portions}= route.params;
     console.log(props);
    // const [detail, setDetail]=useState(null);

        return(
            <View Style={styles.ViewPoster}>
                <Image style={styles.image} source={ruta}/>
                <Text>{name}</Text>
            </View>
        );
  
}

const styles =StyleSheet.create({
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
    
    image:{
       width: "100%",
       height: 300,
       borderBottomLeftRadius:10,
       borderBottomRightRadius:15,
    },
  
})

