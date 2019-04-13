import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');



export default class VerticalText extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  componentDidMount() {
    

  }
  
 
  render() {
    let lineText = 24;//每行文字數量
    let longText =this.props.text;
    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        height: 500, with: 500,
         alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }
          //替換字元
          // if (longText[index] == " ") {
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}></Text>
          // </View>          }
          // else if (longText[index] == "，") {
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}>[，]</Text>
          // </View>          }
          // else{
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}>   {longText[index]}  </Text>
          // </View>
          // }

          return <View style={{ textAlign: "center", borderWidth: 1, }}>

          <Text style={styles.CHfont}>   {longText[index]}  </Text>
        </View>
          
        })}
      </View>
    );
      // <verticalText text={"安安專為數位游牧打造的共享辦公室，遠眺大dd   台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡安安專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡"}/>


  };
}



const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  }, textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaeb23',
  }, textLine: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCaa',
  }, CHfont: {
    // textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    // width: 49,
    // flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5ACaB',
  }





  
});