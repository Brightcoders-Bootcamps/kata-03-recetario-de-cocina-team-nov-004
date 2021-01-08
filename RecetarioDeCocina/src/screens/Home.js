import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import List from '../components/List';
import CarouselVertical from '../components/CarouselVertical';
import {data} from '../components/Data'
import SearchBar from '../components/Searchbar'
let recipes = data.recipes

export default function Home(props){
    const {navigation}= props;
     //console.log(props);

    return(
        <>
            <ScrollView  style={styles.viewPrincipal}>
                <View style={styles.ViewSearch}>
                    <SearchBar />
                </View>
                <View style={styles.viewTrending}>
                    <Text style={styles.textTrending}>TRENDING</Text>
                    <List  data={recipes}  navigation={navigation}  />
                </View>
                <View style={styles.viewRecent}>
                    <Text style={styles.textRecent}>RECENT</Text>
                    <View style={styles.viewRecipes}>
                        <CarouselVertical data={recipes}  navigation={navigation}/>
                    </View>
                </View>
            </ScrollView>
             {/* <ScrollView  style={styles.viewRecent}>
             
            </ScrollView>       */}
        </>
    )
}

const styles = StyleSheet.create({
    viewPrincipal:{
        backgroundColor: "#1e1e1e"
    },
    ViewSearch:{
        marginTop:-10,
    },
    viewRecent:{
        marginTop:1,
    },
    viewTrending:{
        paddingHorizontal:5,
        marginTop:15, 
        marginLeft:10,
    },
    viewRecipes:{
        marginVertical:10,
    },
    tending:{
        marginTop:20,
        marginBottom:50,
    },
    textTrending:{
        color:"#BB367A",
        fontSize: 20,
        marginBottom:10,
        marginLeft:-10,
    },
    textRecent:{
        color:"#BB367A",
        fontSize: 20,
        marginBottom:10,
        marginLeft: 5
    }
})