import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList,Dimensions, Image,TouchableWithoutFeedback } from 'react-native';

const {width}=Dimensions.get("window");
const ITEM_WIDTH=Math.round(width * 0.7);


export default function List(props){
const {data,navigation}=props;

return(
    <View style={{flex: 1}}>
        <FlatList 
        horizontal ={true}
        data={data}
        renderItem= {(item) => <RenderItem  data={item} navigation={navigation} /> }
        sliderWidth={width}
        itemWidth={ITEM_WIDTH}
        />  
    </View>

);
}

function RenderItem(props){
    const {data, navigation} =props;
    const{ id, name, ruta, ingredients,portions,} =data.item;

    const onNavigation = ( ) => {
        navigation.navigate('detail', {id, name, ruta, ingredients,portions} );
    }
    //console.log(props);
    return(

        <TouchableWithoutFeedback onPress={onNavigation}>
            <View style={styles.card}>
                <Image style={styles.image} source={ruta}/>
                <Text style={{color:'#fff', marginBottom:10} }>{name}</Text>
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
       width: 100,
       height: 120,
       borderRadius: 10,
    },


})

