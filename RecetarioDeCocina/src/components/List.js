import React, {Component} from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import {data} from '../components/Data'

let recipes = data.recipes

class List extends Component{

    _renderItem(item){
        return(
            <View>
                <Image style={{width: 100, height: 100, marginRight:10, }} source={item.ruta}/>
                <Text style={{width:100, color:'#fff', marginBottom:20, }}>{item.name}</Text>
            </View>  
        )
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList 
                horizontal ={true}
                renderItem = {({item}) => this._renderItem(item)}
                data={recipes}
                />  
            </View>
        )
    }
}

export default List;