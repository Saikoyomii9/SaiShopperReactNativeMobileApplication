import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const AddList = props => {

        const navigation = useNavigation();
        //Name of shopoing, store, date
        const [name, setName] = useState('groceryShoppingList');
        const [store, setStore] = useState(' ');
        const [date, setDate] = useState(' ');

        const onListAdd = ()  => { //Validation
                if(!name ) {
                        alert('Please emter a ashopping list Name!');
                        return;
                }
                if(!store) {
                        alert('Please emter a store name!');
                        return;
                }
                if(!date ) {
                        alert('Please emter a date in format YYYT-MM-DD!');
                        return;
                }
        }
                
                alert(name + ' Added ');//Alert List has been added
                navigation.navigate('Start Shopping!');

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
                <TextInput  //Place Holder text
                        value = {name}
                        onChangeText={value => setName(value)}
                        style={styles.name}
                        clearButtonMode={'while-editing'}
                        plasceholder={'Enter List Name'}
                        placeholderTextColor={'grey'}
                />
                <TextInput  
                        value = {date}
                        onChangeText={value => setDate(value)}
                        style={styles.date}
                        clearButtonMode={'while-editing'}
                        plasceholder={'Enter Date in format YYYY-MM-DD'}
                        placeholderTextColor={'grey'}
                />
                <TextInput  //Place Holder text
                        value = {store}
                        onChangeText={value => setStore(value)}
                        style={styles.name}
                        clearButtonMode={'while-editing'}
                        plasceholder={'Enter List Name'}
                        placeholderTextColor={'grey'}
                />

        </View>
        <View style={styles.bottomContainer}>
                <Pressable style={styles.button} onPress={onListAdd}>
                        <Text style={styles.buttonText}>  Add </Text>

                </Pressable>

        </View>
    </View>
  );
  }

export default AddList;