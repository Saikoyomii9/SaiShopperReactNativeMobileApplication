import React, { useState } from 'react';
import  { View, TouchableOpacity, Text, FlatList } from 'react-native';
import List from '../../components/List';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const ListsScreen = props => {

    const navigation = useNavigation();

    const [lists, setLists] = useState(
      [
        {
          id: 1,
          name: 'Grocery List',
          store: 'Redners',
          date: '2022-09-14',
        },
      ]
    );
    

  return (
    <View style={styles.container}>
     <View>
     <FlatList
          data={lists}
          renderItem={({item}) => <List post={item} />} 
          />
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