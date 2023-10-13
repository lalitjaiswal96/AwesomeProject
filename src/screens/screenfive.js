import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Screenfive = () => {
  const [data, SetData] = useState([]);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    SetData(result);
  };

  const removeItemById = idToRemove => {
    const updatedData = data.filter(item => item.id !== idToRemove);
    SetData(updatedData);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.View}>
        {data.length
          ? data.map(item => (
              <View key={item.id}>
                <Text style={styles.Text}> {item.id}</Text>
                <Button
                  title="Remove"
                  onPress={() => {
                    removeItemById(item.id);
                  }}></Button>
              </View>
            ))
          : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  View: {
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Screenfive;
