/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Alert,
  FlatList,
  InteractionManager,
  Switch,
  Modal,
  ActivityIndicator,
  Dimensions,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import {StatusBarStyle} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from '../components/tabBarCompo';
import Carousel from 'react-native-reanimated-carousel';
import HeaderBar from '../components/headerbar';

const User = ['abc', 'def'];

const userId = [
  {name: 'lalit', age: 27},
  {name: 'ankit', age: 20},
  {name: 'Amit', age: 22},
  {name: 'Abhi', age: 57},
];

const Home = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const images = [
    require('../assets/facebook.png'),
    require('../assets/facebook.png'),
    require('../assets/facebook.png'),
    require('../assets/facebook.png'),
    require('../assets/facebook.png'),
    require('../assets/facebook.png'),
  ];
  const [lalit, setLalit] = useState(100);
  const [jaiswal, setJaiswal] = useState('Jaiswal');
  const [new1, setNew1] = useState('Jaiswal');
  const [new2, setNew2] = useState('Jaiswal');
  const [profile, setProfile] = useState('pandit');
  const [flatListData, setFlatlistData] = useState([true]);
  const [userName, setUserName] = useState('Enter');
  const [password, setPassword] = useState('Enter');
  const [login, setlogin] = useState('Login');
  const [isEnabled, setIsEnabled] = useState(false);
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showMe, setShowMe] = useState(false);
  const [help, setHelp] = useState(false);
  const toggleSwitch = value => {
    // console.log("valuevaluevaluevaluevaluevaluevaluevalue>>>>>", value)
    setIsEnabled(value);
  };

  // const result = await launchImageLibrary(options?);

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    console.log('launchCamera>>>>>>>> result >>>>>>', result.assets[0].uri);
    setImageUri(result.assets[0].uri);
  };

  const items = [
    {item: 'Item 1', price: '10', id: 1},
    {item: 'Item 2', price: '20', id: 2},
    {item: 'Item 3', price: '30', id: 3},
    {item: 'Item 4', price: '40', id: 4},
    {item: 'Item 5', price: '50', id: 5},
    {item: 'Item 6', price: '60', id: 6},
    {item: 'Item 7', price: '70', id: 7},
    {item: 'Item 8', price: '80', id: 8},
    {item: 'Item 9', price: '90', id: 9},
    {item: 'Item 10', price: '100', id: 10},
    {item: 'Item 11', price: '110', id: 11},
    {item: 'Item 12', price: '120', id: 12},
    {item: 'Item 13', price: '130', id: 13},
    {item: 'Item 14', price: '140', id: 14},
    {item: 'Item 15', price: '150', id: 15},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screen}>
        <ScrollView>
          {items.map((item, index) => (
            <View key={item.id}>
              <View>
                <Text>
                  {item.item} <Text style={styles.amount}>${item.price}</Text>
                </Text>
                <Button title="Order" color="#FFC107" onPress={() => {}} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 60,
    alignSelf: 'center',
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  image: {width: 70, height: 70, borderRadius: 35, margin: 10},
  button: {
    borderWidth: 3,
    height: 40,
    width: 60,
    margin: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: 'white',
  },
  screen: {
    margin: 20,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  amount: {
    color: '#C2185B',
  },
});

export default Home;
