import React, {Component} from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import {data} from '../components/Data'

let recipes = data.recipes

class List extends Component{

    _renderItem(item){
        return(
            <Image style={{width: 120, height: 180, marginRight:5, }} source={item.ruta}/>
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