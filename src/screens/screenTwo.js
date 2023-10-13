import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import AntDesign from 'react-native/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';

const Data = [
  {Name: 'Lalit', age: 27, id: 1},
  {Name: 'Shardul', age: 30, id: 2},
  {Name: 'Ankit', age: 45, id: 3},
  {Name: 'Navya', age: 27, id: 4},
  {Name: 'Bharti', age: 22, id: 5},
  {Name: 'Arti', age: 29, id: 6},
  {Name: 'Pooja', age: 26, id: 7},
  {Name: 'Aakash', age: 21, id: 8},
];

const Screentwo = () => {
  const [data, setData] = useState(Data);

  // const handleDeletePerson = personDetail => {
  //   console.log('personDetail', personDetail.item.Name);
    // setData(Data);
    const handleDeletePerson = (personDetail) =>{
    
    Alert.alert(
      'Alert',
      'are you sure, you want to delete ' + personDetail.item.Name + '?',
      [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'No',
        },
        {text: 'Yes', onPress: () => deletePersonFromArray(personDetail)},
      ],
    );
  };

  const deletePersonFromArray = personDetail => {
    console.log('personDetail in deletePersonFromArray', personDetail);
    const result = data.filter(person => {
      console.log('person>>>>>', person);
      if (person.id !== personDetail.item.id) {
        return person;
      }
    });
    console.log('resultresult>>>>>>', result);
    setData(result);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          data={data}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() => handleDeletePerson(item)}
                style={styles.button}>
                <Text>{item.item.Name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  View: {
    width: 150,
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'skyblue',
    margin: 5,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    margin: 10,
  },
});

export default Screentwo;
