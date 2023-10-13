import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

const HeaderBar = ({title}) => {
  const [press, setPress] = useState(false);
  return (
    <View>
      {press && <ActivityIndicator size="large" />}
      <TouchableOpacity
        onPress={() => {
          setPress(!press)
          // alert('Loading');
        }}
        style={{
          width: 80,
          height: 25,
          borderWidth: 0.5,
          borderColor: 'white',
          alignItems: 'center',
          // alignContent:'center'
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          elevation: 30,
          marginLeft: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
