import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../themes/ImagePath';
import normalize from '../../utils/helpers/normalize';

const FbPosting = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: normalize(22),
          marginTop: normalize(20),
          height: normalize(303),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.6,
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: normalize(15),
          paddingHorizontal: normalize(13),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 0.6,
            paddingBottom: normalize(8),
            marginTop: normalize(8),
            borderColor: '#ccc',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={Images.user}
              style={{
                resizeMode: 'contain',
                width: normalize(35),
                height: normalize(35),
              }}
            />
            <View
              style={{
                marginTop: normalize(3),
              }}>
              <Text
                style={{
                  color: '#000',
                  marginLeft: normalize(8),
                }}>
                Gaurab Mukherjee
              </Text>
              <Text
                style={{
                  color: '#000',
                  marginLeft: normalize(8),
                  fontSize: normalize(9),
                  marginTop: normalize(3),
                  color: '#aaa',
                }}>
                Saltlake, Kolkata
              </Text>
            </View>
          </View>
          <Image
            source={Images.threeDot}
            style={{
              resizeMode: 'contain',
              width: normalize(15),
              height: normalize(15),
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            marginTop: normalize(10),
          }}>
          Some beautiful landscapes...
        </Text>
        <View
        style={{
          flexDirection:'row',
          justifyContent:'space-between'
        }}
        >
          <Image
            source={Images.image_01}
            style={{
              resizeMode: 'cover',
              width: '49%',
              height: normalize(150),
              marginTop: normalize(10),
            }}
          />
          <View
          style={{
            // borderWidth:1,
            width:'49%',
            height:normalize(150),
            marginTop:normalize(10)
          }}
          >
          <Image
            source={Images.image_02}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: normalize(72)
            }}
          />
          <View
          style={{
            position:'relative',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
          <Image
            source={Images.image_03}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: normalize(72),
              marginTop:normalize(5)
            }}
          />
          <View
          style={{
            width:normalize(25),
            height:normalize(25),
            position:'absolute',
            top:35,
            zIndex:2,
            borderWidth:1,
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#fff',
            borderRadius:normalize(40)
          }}
          >
            <Text
            style={{
              color:'#fff'
            }}
            >+2</Text>
          </View>
          </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(6),
            borderBottomWidth: 0.6,
            paddingBottom: normalize(6),
            borderColor: '#ccc',
          }}>
          <Image
            source={Images.like_01}
            style={{
              width: normalize(12),
              height: normalize(12),
              resizeMode: 'contain',
            }}
          />
          <Image
            source={Images.heart}
            style={{
              width: normalize(16),
              height: normalize(16),
              resizeMode: 'contain',
              marginLeft: normalize(-1),
            }}
          />
          <Image
            source={Images.wow}
            style={{
              width: normalize(13),
              height: normalize(13),
              resizeMode: 'contain',
              marginLeft: normalize(-1),
            }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: normalize(8),
              marginLeft: normalize(3),
            }}>
            Payel Saha and 3.5k others
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: normalize(10),
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.like}
              style={{
                resizeMode: 'contain',
                width: normalize(10),
                height: normalize(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: normalize(5),
              }}>
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.comment}
              style={{
                resizeMode: 'contain',
                width: normalize(10),
                height: normalize(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: normalize(5),
              }}>
              Comment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.share}
              style={{
                resizeMode: 'contain',
                width: normalize(10),
                height: normalize(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: normalize(5),
              }}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FbPosting;
