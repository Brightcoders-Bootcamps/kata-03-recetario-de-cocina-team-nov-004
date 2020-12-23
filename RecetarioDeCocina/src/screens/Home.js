import React from 'react'
import {View, Image, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import List from '../components/List'

export default class Home extends React.Component{
    render(){
        return(
            <ScrollView  style={{backgroundColor: "#FFF"}}>
                <View style={{
                    paddingHorizontal:20,
                    marginTop:50,
                    height: "50%"
                }}>
                    <Text style={{
                        color:"#E30052",
                        fontSize: 20
                    }}>TRENDING</Text>
                    <List />
                </View>
            </ScrollView>
           
        )
    }
}