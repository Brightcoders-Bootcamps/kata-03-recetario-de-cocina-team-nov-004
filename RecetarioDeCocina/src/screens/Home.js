import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import List from '../components/List';
import CarouselVertical from '../components/CarouselVertical';
import {data} from '../components/Data'

let recipes = data.recipes

export default class Home extends React.Component{
    render(){
        return(
            <>
            <ScrollView  style={{backgroundColor: "#332F2C"}}>
                <View style={{
                    paddingHorizontal:5,
                    marginTop:50,
                    height: "50%"
                }}>
                    <Text style={{
                        color:"#BB367A",
                        fontSize: 20,
                        marginBottom:10
                    }}>TRENDING</Text>
                    <List />
                </View>
                <View style={{
                    marginTop:70,
                    height: "50%"
                }}>
                  
                    
                </View>
            </ScrollView>

            <ScrollView  style={styles.viewRecent}>
            <Text style={{ color:"#BB367A", fontSize: 20, marginBottom:10 }}>RECENT</Text>
                <View style={styles.viewRecipes}>
                 <CarouselVertical data={recipes} />
                 </View>

            </ScrollView>
        </>
        )
    }
}
const styles = StyleSheet.create({
 
    viewRecent:{
        position:'absolute',
        backgroundColor:'#332F2C',
        marginTop:250,
    },
    viewRecipes:{
        marginVertical:10,


    }
})