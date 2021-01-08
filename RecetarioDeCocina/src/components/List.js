import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, Image,TouchableWithoutFeedback } from 'react-native';


export default function List(props){
const {data,navigation}=props;

return(
    <View style={{flex: 1}}>
        <FlatList 
        horizontal ={true}
        data={data}
        renderItem= {(item) => <RenderItem  data={item} navigation={navigation} /> }
        />  
    </View>

);
}

function RenderItem(props){
    const {data, navigation} =props;
    const{ id, name, ruta,category, ingredients,portions,} =data.item;

const onNavigation = ( ) => {

        navigation.navigate('detail', {id, name, ruta,category, ingredients,portions} );

    }
    //console.log(props);
    return(

        <TouchableWithoutFeedback onPress={onNavigation}>
            <View style={styles.card}>
                <Image style={styles.image} source={ruta}/>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles =StyleSheet.create({
    card:{
       shadowColor:"#000",
       shadowOffset:{
           width:10,
           height:20,
       },
       alignItems:'center',
       shadowOpacity:1,
       shadowRadius:10,
    },
    image:{
       width: 110,
       height: 110,
       borderRadius: 10,
       marginRight: 10
    },
    text:{
        color:'#fff', 
        marginBottom:10,
        marginTop:5,
        width:100
    }


})

