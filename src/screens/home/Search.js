import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Images} from '../../themes/ImagePath';
import normalize from '../../utils/helpers/normalize';

const DATA = [
  {id: 1, msg: 'I am a boy'},
  {id: 2, msg: 'I am a girl'},
  {id: 3, msg: 'I am a gay'},
  {id: 4, msg: 'I am a lesbian'},
  {id: 5, msg: 'I am a psycopath'},
];

const Search = () => {
  const [isSelect, setSelect] = useState([]);
  console.log('IsSelect: ', isSelect);
  const handleChange = (index) => {
    if(isSelect[index] == null){
      let newArr = [...isSelect];
      newArr[index] = 'yes';
      setSelect(newArr)
    }else{
      let newArr = [...isSelect]
      newArr[index] = null;
      setSelect(newArr)
    }
  };

  const renderItems = ({item, index}) => (
    <TouchableOpacity
      style={{
        borderRadius: normalize(10),
        width: normalize(150),
        height: normalize(50),
        alignSelf: 'center',
        backgroundColor: isSelect[index] == 'yes'  ? '#8c1515' : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(25),
        marginBottom: normalize(15),
      }}
      key={index}
      onPress={() => handleChange(index)}>
      <Text
        style={{
          color: isSelect[index] == 'yes' ? '#fff' : '#000',
        }}>
        {item?.msg}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View>
        <FlatList data={DATA} renderItem={renderItems} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
