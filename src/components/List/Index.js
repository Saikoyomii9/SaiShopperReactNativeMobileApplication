import React from 'react';
import styles from './styles';
import  { View, TouchableOpacity, Text } from 'react-native';
const ListsScreen = props => {

  return (
    <View style={styles.container}>
     <View style={styles.bottom}>
      <TouchableOpacity
       style={styles.bottom}
       onPress={()=>console.log('Add List')}
       >
        <Text style={styles.buttonText}>Add List</Text>

      </TouchableOpacity>

     </View>
    </View>
  );
};

export default ListsScreen;