import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { create } from 'react-test-renderer';


const Title = ()=>{
  return (
        <View>
          <Text style={style.textTitle}>OI</Text>
        </View>

  );
}

const style =  create.StyleSheet(
  {
    'textTitle' :{
      'color': 'red'
    }
  }
)
export default Title;