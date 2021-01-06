import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import List from '../components/List';
import CarouselVertical from '../components/CarouselVertical';
import {data} from '../components/Data'

let recipes = data.recipes

export default function Home(props){
     const {navigation}= props;
     //console.log(props);

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
                    <List  data={recipes}  navigation={navigation}  />
                </View>
                <View style={{
                    marginTop:70,
                    height: "50%"
                }}>
                  
                </View>
            </ScrollView>


            <ScrollView  style={styles.viewRecent}>
            <Text style={{ color:"#BB367A", fontSize: 20, marginBottom:10, marginLeft:10 }}>RECENT</Text>
                <View style={styles.viewRecipes}>
                 <CarouselVertical data={recipes}  navigation={navigation}/>
                 </View>
            </ScrollView>
          
        </>
        )
    }

const styles = StyleSheet.create({
 
    viewRecent:{
        position:'absolute',
        backgroundColor:'#332F2C',
        marginTop:270,
    },
    viewTrending:{
        position:'absolute',
        backgroundColor:'#332F2C',
        marginTop:50,
      
    },
    viewRecipes:{
        marginVertical:10,
    },
    tending:{
        marginTop:20,
        marginBottom:50,
    }
})