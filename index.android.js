/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, TextInput, View, ListView } from 'react-native';
var auxiliar=1;

/*function addNr(x,y) {
  var sum = ''
  xlen = x.length;
  ylen = y.length;

  var min = Math.min(xlen, ylen);
  for (i = 1; i <= min; i++) {
    var tmp = parseInt(x.charAt(xlen - i)) + parseInt(y.charAt(ylen - i))
    sum = sum + tmp.toString();
    return reverse(sum);
  }

  if (x.length == 0) {
    alert('Write Some real Text please.');
    return;
  }
  if (y.length == 0) {
    alert('Write Some real Text please.');
    return;
  }

}
function reverse(s) {
  return s.split('').reverse().join('');
}
*/

function fibonacci(num){
  var a = 1, b = 1, result = 1;
  if(num <=1) return 1;
  for(var i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}


function dataFB(num){
  var dataBlob = [];
  for(var i=0; i<num;i++)
  {
    dataBlob.push(fibonacci(i)+ '\n');
  }
  return dataBlob;
}
class AwseomeProject extends Component {
  constructor(props) {

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {text: ''};
     this.state = {dataSource: ds.cloneWithRows(dataFB(0))};
    }

  render() {
    return (
      
      <ScrollView style={{padding: 40}}>
      
        <TextInput
          style={{height: 40, top: 0}}
          keyboardType="numeric"
          position="fixed"
          placeholder="Type here!"
          onChangeText={(text) => this.setState({text})
                        //auxiliar = this.text
                      }
        />
        
        <Text>Fibonnaci Nr:{this.state.text}</Text>
        <Text>{dataFB(this.state.text)}</Text>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
          </ScrollView>   
    );
  }

}
AppRegistry.registerComponent('AwseomeProject', () => AwseomeProject);
