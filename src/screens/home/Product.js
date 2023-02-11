import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataListRequest} from '../../redux/reducer/AuthReducer';
import normalize from '../../utils/helpers/normalize';

let status = '';

const Product = (props) => {
  const AuthReducer = useSelector(state => state.AuthReducer);
  console.log('Data Auth: ', AuthReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataListRequest());
  }, []);

  const [proData, setPro] = useState([]);
  console.log('ProData: ', proData);

  if (status == '' || AuthReducer.status != status) {
    switch (AuthReducer?.status) {
      case 'Auth/dataListRequest':
        status = AuthReducer?.status;
        break;

      case 'Auth/dataListSuccess':
        status = AuthReducer?.status;
        console.log('Success data: ', AuthReducer?.dataResponse);
        setPro(AuthReducer?.dataResponse);
        break;

      case 'Auth/dataListFailure':
        status = AuthReducer?.status;
        console.log('Error: ', AuthReducer?.error);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#8c1515',
            alignSelf: 'center',
            width: normalize(150),
            height: normalize(35),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: normalize(15),
            borderRadius: normalize(8),
            marginBottom: normalize(15),
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Product Lists
          </Text>
        </View>

        {/* Product List */}
        {proData.map((item, index) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#ddd',
              alignSelf: 'center',
              width: normalize(250),
              height: normalize(85),
              justifyContent: 'center',
              borderTopRightRadius: normalize(8),
              borderBottomRightRadius: normalize(8),
              marginBottom: normalize(10),
              paddingHorizontal:normalize(10)
            }} key={index} onPress={()=> props.navigation.navigate('SubProduct', {subPro : item})}>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(13),
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
        {/* Product List */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;