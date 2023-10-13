import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = ({title, iconName}) => {
  return (
    // <View>
      <Icon.Button
        name={iconName}
        backgroundColor="black"
        onPress={() => {
          alert('Loading.....');
        }}>
        {title}
      </Icon.Button>
    // </View>
  );
};

export default TabBar;
