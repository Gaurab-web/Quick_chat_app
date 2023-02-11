import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataListRequest} from '../../redux/reducer/AuthReducer';
import normalize from '../../utils/helpers/normalize';

let status = '';

const SubProduct = props => {
  const {subPro} = props.route.params;
  console.log('SubPro: ', subPro);
  const [idCount, setCount] = useState(subPro.id);
  console.log('ID Count: ',idCount);
  const AuthReducer = useSelector(state => state.AuthReducer);
  console.log('Auth Next: ', AuthReducer?.dataResponse);

  const nextData = AuthReducer?.dataResponse[idCount - 1];
  console.log('Next Data: ', nextData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataListRequest());
  }, []);
  
  const handleChange = id => {
    console.log('ID: ', id);
    setCount(id + 1);
  };
  return (
    <Fragment>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <TouchableOpacity style={{
            marginLeft:normalize(20),
            marginTop:normalize(20)
        }} onPress={()=> idCount == 1 ? props.navigation.goBack(): setCount(idCount-1)}>
            <Text style={{
                color:'#000'
            }}>{'<-'}Back</Text>
        </TouchableOpacity>
        {AuthReducer.dataResponse[idCount - 1].id == subPro.id ? (
          <View>
            <View
              style={{
                // borderWidth: 1,
                borderColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: normalize(15),
                borderRadius: normalize(100),
                width: normalize(150),
                height: normalize(150),
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 10,
                shadowRadius: 0.5,
                elevation: 5,
              }}>
              <Image
                source={{uri: subPro.image}}
                style={{
                  resizeMode: 'contain',
                  width: normalize(100),
                  height: normalize(100),
                }}
              />
            </View>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                marginTop: normalize(10),
                fontWeight: '600',
                fontSize: normalize(15),
              }}>
              {subPro.category}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: normalize(20),
                marginTop: normalize(20),
              }}>
              <Text
                style={{
                  color: '#000',
                  flexBasis: '55%',
                  // borderWidth:1,
                  fontSize: normalize(11),
                  fontWeight: '500',
                }}>
                {subPro.title}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: normalize(13),
                  fontWeight: '600',
                }}>
                {'$'}
                {subPro.price}{' '}
                <Text
                  style={{
                    color: '#000',
                    fontSize: normalize(8),
                  }}>
                  {subPro.rating.rate}
                </Text>
              </Text>
            </View>
            <Text
              style={{
                color: '#000',
                marginTop: normalize(25),
                marginHorizontal: normalize(20),
              }}>
              <Text
                style={{
                  fontWeight: '600',
                }}>
                Description:
              </Text>
              {subPro.description}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFA517',
                marginTop: normalize(30),
                alignSelf: 'center',
                width: normalize(100),
                height: normalize(40),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: normalize(8),
              }}
              onPress={() => handleChange(subPro.id)}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View
              style={{
                // borderWidth: 1,
                borderColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: normalize(15),
                borderRadius: normalize(100),
                width: normalize(150),
                height: normalize(150),
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 10,
                shadowRadius: 0.5,
                elevation: 5,
              }}>
              <Image
                source={{uri: nextData.image}}
                style={{
                  resizeMode: 'contain',
                  width: normalize(100),
                  height: normalize(100),
                }}
              />
            </View>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                marginTop: normalize(10),
                fontWeight: '600',
                fontSize: normalize(15),
              }}>
              {nextData.category}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: normalize(20),
                marginTop: normalize(20),
              }}>
              <Text
                style={{
                  color: '#000',
                  flexBasis: '55%',
                  // borderWidth:1,
                  fontSize: normalize(11),
                  fontWeight: '500',
                }}>
                {nextData.title}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: normalize(13),
                  fontWeight: '600',
                }}>
                {'$'}
                {nextData.price}{' '}
                <Text
                  style={{
                    color: '#000',
                    fontSize: normalize(8),
                  }}>
                  {nextData.rating.rate}
                </Text>
              </Text>
            </View>
            <Text
              style={{
                color: '#000',
                marginTop: normalize(25),
                marginHorizontal: normalize(20),
              }}>
              <Text
                style={{
                  fontWeight: '600',
                }}>
                Description:
              </Text>
              {nextData.description}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFA517',
                marginTop: normalize(30),
                alignSelf: 'center',
                width: normalize(100),
                height: normalize(40),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: normalize(8),
              }}
              onPress={() => handleChange(nextData.id)}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Fragment>
  );
};

export default SubProduct;
