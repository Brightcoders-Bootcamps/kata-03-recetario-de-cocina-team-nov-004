import React from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
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
            <View style={styles.viewsearchbar}>
                <TextInput style={styles.searchbar} placeholder='What do you want to eat?' placeholderTextColor='white'></TextInput>
            </View>

            <ScrollView  style={styles.viewPrincipal}>
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
    viewsearchbar:{
        backgroundColor: "#1e1e1e",
        alignItems: 'center',
        backgroundColor: '#282828',
    },

    searchbar:{ 
        alignItems: 'center',
        fontSize: 15,
        color: 'white',
        margin: 10,
        width: '90%',
        height: 40,
        backgroundColor: '#343435',
        borderRadius: 10, 
        marginTop: 40,
    },  

    viewPrincipal:{
        backgroundColor: "#282828"
    },
    viewRecent:{
        marginTop:30,
    },
    viewTrending:{
        paddingHorizontal:5,
        marginTop:30
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
        marginBottom:10
    },
    textRecent:{
        color:"#BB367A",
        fontSize: 20,
        marginBottom:10,
        marginLeft: 5
    }
})