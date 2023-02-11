import React, {Fragment, useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {Images} from '../../themes/ImagePath';
import normalize from '../../utils/helpers/normalize';

const RanPro = () => {
  const [DATA, setData] = useState([
    {
      id: 1,
      img: Images.highHeel,
      name: 'Shoes',
      selected: false,
      subData: [
        {id: 1, name: 'Border'},
        {id: 2, name: 'Border'},
        {id: 3, name: 'Border'},
        {id: 4, name: 'Border'},
      ],
    },
    {
      id: 2,
      img: Images.dress,
      name: 'Dress',
      selected: false,
      subData: [
        {id: 1, name: 'Border'},
        {id: 2, name: 'Border'},
        {id: 3, name: 'Border'},
        {id: 4, name: 'Border'},
      ],
    },
    {
      id: 3,
      img: Images.handbag,
      name: 'Bags',
      selected: false,
      subData: [
        {id: 1, name: 'Border'},
        {id: 2, name: 'Border'},
        {id: 3, name: 'Border'},
        {id: 4, name: 'Border'},
      ],
    },
  ]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // const [option, setOption] = useState(0);
  const [useItem, setUse] = useState({});
  const handleChange = (index, item) => {
    let newArr = [...DATA];
    newArr[index].selected = newArr[index].selected == false ? true : false;
    setData(newArr);
    setUse(item);
  };

  // const renderItems = ({item, index}) => (
  //   <View
  //     style={{
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       marginHorizontal: normalize(10),
  //       justifyContent: 'space-between',
  //       height: normalize(55),
  //       borderBottomColor: '#ccc',
  //       borderBottomWidth: 1,
  //     }}>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         justifyContent: 'space-between',
  //       }}>
  //       <View
  //         style={{
  //           borderRadius: normalize(8),
  //           width: normalize(45),
  //           height: normalize(35),
  //           backgroundColor: '#fff',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}>
  //         <Image
  //           source={item.img}
  //           style={{
  //             resizeMode: 'contain',
  //             width: normalize(20),
  //             height: normalize(20),
  //             tintColor: 'red',
  //           }}
  //         />
  //       </View>
  //       <Text
  //         style={{
  //           color: '#000',
  //           marginLeft: normalize(12),
  //           fontWeight: '600',
  //         }}>
  //         {item.name}
  //       </Text>
  //     </View>
  //     <TouchableOpacity onPress={() => handleChange(index, item)}>
  //       <Image
  //         source={Images.threedot}
  //         style={{
  //           resizeMode: 'contain',
  //           width: normalize(13),
  //           height: normalize(13),
  //           tintColor: '#5AB0EB',
  //         }}
  //       />
  //     </TouchableOpacity>
  //     {item.selected ? (
  //       <View
  //         style={{
  //           position: 'absolute',
  //           top: 0,
  //           right: 0,
  //           width: normalize(125),
  //           height: normalize(135),
  //           backgroundColor: '#fff',
  //           marginTop: normalize(40),
  //           borderRadius: normalize(10),
  //         }}>
  //         <TouchableOpacity
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             height: normalize(33),
  //             marginHorizontal: normalize(10),
  //           }}>
  //           <Image
  //             source={Images.files}
  //             style={{
  //               resizeMode: 'contain',
  //               width: normalize(20),
  //               height: normalize(20),
  //             }}
  //           />
  //           <Text
  //             style={{
  //               color: '#000',
  //               marginLeft: normalize(10),
  //             }}>
  //             Bedroom
  //           </Text>
  //         </TouchableOpacity>
  //         <View
  //           style={{
  //             borderWidth: 0.2,
  //             width: '85%',
  //             marginHorizontal: normalize(10),
  //             borderColor: '#ccc',
  //           }}></View>
  //         <TouchableOpacity
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             height: normalize(33),
  //             marginHorizontal: normalize(10),
  //           }}>
  //           <Image
  //             source={Images.files}
  //             style={{
  //               resizeMode: 'contain',
  //               width: normalize(20),
  //               height: normalize(20),
  //             }}
  //           />
  //           <Text
  //             style={{
  //               color: '#000',
  //               marginLeft: normalize(10),
  //             }}>
  //             Bedroom
  //           </Text>
  //         </TouchableOpacity>
  //         <View
  //           style={{
  //             borderWidth: 0.2,
  //             width: '85%',
  //             marginHorizontal: normalize(10),
  //             borderColor: '#ccc',
  //           }}></View>
  //         <TouchableOpacity
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             height: normalize(33),
  //             marginHorizontal: normalize(10),
  //           }}>
  //           <Image
  //             source={Images.files}
  //             style={{
  //               resizeMode: 'contain',
  //               width: normalize(20),
  //               height: normalize(20),
  //             }}
  //           />
  //           <Text
  //             style={{
  //               color: '#000',
  //               marginLeft: normalize(10),
  //             }}>
  //             Bedroom
  //           </Text>
  //         </TouchableOpacity>
  //         <View
  //           style={{
  //             borderWidth: 0.2,
  //             width: '85%',
  //             marginHorizontal: normalize(10),
  //             borderColor: '#ccc',
  //           }}></View>
  //         <TouchableOpacity
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             height: normalize(33),
  //             marginHorizontal: normalize(10),
  //           }}>
  //           <Image
  //             source={Images.files}
  //             style={{
  //               resizeMode: 'contain',
  //               width: normalize(20),
  //               height: normalize(20),
  //             }}
  //           />
  //           <Text
  //             style={{
  //               color: '#000',
  //               marginLeft: normalize(10),
  //             }}>
  //             Bedroom
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     ) : null}
  //   </View>
  // );
  return (
    <Fragment>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={Images.threebar}
            style={{
              resizeMode: 'contain',
              width: normalize(20),
              height: normalize(20),
              marginLeft: normalize(10),
              marginTop: normalize(20),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
            marginTop: 30,
            color: '#000',
          }}>
          Home
        </Text>

        {/* Modal Part */}
        <Modal
          isVisible={modal}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          style={{margin: 0}}>
          <View
            style={{
              backgroundColor: '#eee',
              height: '100%',
              width: '65%',
            }}>
            {/* Header Part */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: normalize(45),
                paddingHorizontal: normalize(10),
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000',
                }}>
                All Category
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={Images.closeBtn}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(10),
                    height: normalize(10),
                  }}
                />
              </TouchableOpacity>
            </View>
            {/* Header Part */}
            {/* Body Part */}
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: normalize(10),
                justifyContent: 'space-between',
                height: normalize(55),
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                zIndex: 999,
                position:'relative',
                backgroundColor:'red'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: normalize(8),
                    width: normalize(45),
                    height: normalize(35),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Images.highHeel}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                      tintColor: 'red',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    marginLeft: normalize(12),
                    fontWeight: '600',
                  }}>
                  Shoes
                </Text>
              </View>
              <TouchableOpacity onPress={()=> option == 1 ? setOption(0) : setOption(1)}>
                <Image
                  source={Images.threedot}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(13),
                    height: normalize(13),
                    tintColor: '#5AB0EB',
                  }}
                />
              </TouchableOpacity>

              {option == 1 ? 
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: normalize(125),
                  height: normalize(135),
                  backgroundColor: '#fff',
                  marginTop: normalize(40),
                  borderRadius: normalize(10),
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
              </View>: null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: normalize(10),
                justifyContent: 'space-between',
                height: normalize(55),
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                zIndex: 1,
                backgroundColor:'red'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: normalize(8),
                    width: normalize(45),
                    height: normalize(35),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Images.dress}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                      tintColor: 'red',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    marginLeft: normalize(12),
                    fontWeight: '600',
                  }}>
                  Dress
                </Text>
              </View>
              <TouchableOpacity onPress={()=> option == 2 ? setOption(0) : setOption(2)}>
                <Image
                  source={Images.threedot}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(13),
                    height: normalize(13),
                    tintColor: '#5AB0EB',
                  }}
                />
              </TouchableOpacity>

              {option == 2 ? <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: normalize(125),
                  height: normalize(135),
                  backgroundColor: '#fff',
                  marginTop: normalize(40),
                  borderRadius: normalize(10),
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
              </View>: null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: normalize(10),
                justifyContent: 'space-between',
                height: normalize(55),
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                zIndex: 1,
                backgroundColor:'red'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: normalize(8),
                    width: normalize(45),
                    height: normalize(35),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Images.handbag}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                      tintColor: 'red',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    marginLeft: normalize(12),
                    fontWeight: '600',
                  }}>
                  Bags
                </Text>
              </View>
              <TouchableOpacity onPress={()=> option == 3 ? setOption(0) : setOption(3)}>
                <Image
                  source={Images.threedot}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(13),
                    height: normalize(13),
                    tintColor: '#5AB0EB',
                  }}
                />
              </TouchableOpacity>

              {option == 3 ? <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: normalize(125),
                  height: normalize(135),
                  backgroundColor: '#fff',
                  marginTop: normalize(40),
                  borderRadius: normalize(10),
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.2,
                    width: '85%',
                    marginHorizontal: normalize(10),
                    borderColor: '#ccc',
                  }}></View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: normalize(33),
                    marginHorizontal: normalize(10),
                  }}>
                  <Image
                    source={Images.files}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(20),
                      height: normalize(20),
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(10),
                    }}>
                    Bedroom
                  </Text>
                </TouchableOpacity>
              </View>: null}
            </View> */}
            {/* {DATA.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: normalize(10),
                  justifyContent: 'space-between',
                  height: normalize(55),
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  zIndex: item.selected ? 999 : 0,
                }}
                key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      borderRadius: normalize(8),
                      width: normalize(45),
                      height: normalize(35),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        resizeMode: 'contain',
                        width: normalize(20),
                        height: normalize(20),
                        tintColor: 'red',
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: normalize(12),
                      fontWeight: '600',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => handleChange(index)}>
                  <Image
                    source={Images.threedot}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(13),
                      height: normalize(13),
                      tintColor: '#5AB0EB',
                    }}
                  />
                </TouchableOpacity>

                {item.selected ? (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: normalize(125),
                      height: normalize(135),
                      backgroundColor: '#fff',
                      marginTop: normalize(40),
                      borderRadius: normalize(10),
                    }}>
                    {item.subData.map((subItem, index) => (
                      <Fragment key={index}>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: normalize(33),
                            marginHorizontal: normalize(10),
                          }}>
                          <Image
                            source={Images.files}
                            style={{
                              resizeMode: 'contain',
                              width: normalize(20),
                              height: normalize(20),
                            }}
                          />
                          <Text
                            style={{
                              color: '#000',
                              marginLeft: normalize(10),
                            }}>
                            {subItem.name}
                          </Text>
                        </TouchableOpacity>
                        {subItem.id == 4 ? null : <View
                          style={{
                            borderWidth: 0.2,
                            width: '85%',
                            marginHorizontal: normalize(10),
                            borderColor: '#ccc',
                          }}></View>}
                      </Fragment>
                    ))}
                  </View>
                ) : null}
              </View>
            ))} */}
            <FlatList
              data={DATA}
              renderItem={({item, index}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: normalize(10),
                    justifyContent: 'space-between',
                    height: normalize(55),
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    zIndex : item.selected ? 999 : 0
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        borderRadius: normalize(8),
                        width: normalize(45),
                        height: normalize(35),
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.img}
                        style={{
                          resizeMode: 'contain',
                          width: normalize(20),
                          height: normalize(20),
                          tintColor: 'red',
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: normalize(12),
                        fontWeight: '600',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => handleChange(index, item)}>
                    <Image
                      source={Images.threedot}
                      style={{
                        resizeMode: 'contain',
                        width: normalize(13),
                        height: normalize(13),
                        tintColor: '#5AB0EB',
                      }}
                    />
                  </TouchableOpacity>
                  {item.selected ? (
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: normalize(125),
                        height: normalize(135),
                        backgroundColor: '#fff',
                        marginTop: normalize(40),
                        borderRadius: normalize(10),
                      }}>
                      <FlatList
                        data={item.subData}
                        renderItem={letter => {
                          <View key={letter.item.id}>
                            <TouchableOpacity
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: normalize(33),
                                marginHorizontal: normalize(10),
                                zIndex : 999,
                              }}>
                              <Image
                                source={Images.files}
                                style={{
                                  resizeMode: 'contain',
                                  width: normalize(20),
                                  height: normalize(20),
                                }}
                              />
                              <Text
                                style={{
                                  color: '#000',
                                  marginLeft: normalize(10),
                                }}>
                                {letter.item.name}
                              </Text>
                            </TouchableOpacity>
                            <View
                              style={{
                                borderWidth: 0.2,
                                width: '85%',
                                marginHorizontal: normalize(10),
                                borderColor: '#ccc',
                              }}></View>
                          </View>;
                        }}
                      />
                    </View>
                  ) : null}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={true}
              contentContainerStyle={{
                height: '100%',
                zIndex: 999,
              }}
            />
            {/* Body Part */}
          </View>
        </Modal>
        {/* Modal Part */}
      </View>
    </Fragment>
  );
};

export default RanPro;
