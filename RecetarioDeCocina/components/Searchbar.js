/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
    Icon,
  } from 'react-native';
  export default class SearchBar extends Component{
      render(){
        
          return(
            <form>
                <input
                type="text"
                placeholder="What ..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
                />
              
          </form>
          )
      }
  }

const styles = StyleSheet.create({
      
   
      });