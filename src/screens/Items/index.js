import React from 'react';
import  {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';


const ItemsScreen = props => {


  return (
    <View style={styles.container}>
        <View style = {styles.bottom}>
                <TouchableOpacity
                style ={styles.button}
                onPress={()=> console.log('AddList')}
                >
                <Text style ={styles.buttonText}> Add List </Text>
                </TouchableOpacity>

        </View>
    </View>
  );

};

export default ItemsScreen;