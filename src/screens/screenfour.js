import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Alert, TextInput} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';

const Screenfour = () => {
  const [data, setData] = useState([]);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    console.log();
  };
  const removeItemById = idToRemove => {
    const updatedData = data.filter(item => item.id !== idToRemove);
    setData(updatedData);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View>
        {data
          ? data.map(value => (
              <View
                style={{
                  alignItems: 'center',
                }}
                key={value.name}>
                <Text style={styles.Text}>ID:{value.id}</Text>
                <Text style={styles.Text}>Name:{value.name}</Text>
                <Text style={styles.Text}>Email:{value.email}</Text>
                <Button
                  title="Remove"
                  onPress={() => {
                    removeItemById(value.id);
                  }}
                />
              </View>
            ))
          : null}
      </View>
      <View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
export default Screenfour;
