import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, Easing } from "react-native";
import Video from "react-native-video";
import normalize from "../../utils/helpers/normalize";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";


const VideoNew = () => {
    const [value, setVal] = useState(0);

    const [play, setPlay] = useState(true);
    const [length, setLen] = useState(0);
    console.log('LEN: ', length, 'VAL: ', value);

    const handleLength=(len)=>{
        setLen(len)
    }
    // console.log('Play : ', play.props);

    // const [playBtn, setBtn] = useState(play.paused)

    // const handleChange = (ref)=>{
    //     console.log('Ref: ', ref);
    //     setPlay(ref)
    // }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <View style={{
                    alignSelf: 'center',
                    width: normalize(200),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: normalize(45),
                    marginTop: normalize(50),
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 8
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 8
                }}>
                    <Text style={{
                        fontSize: normalize(15),
                        fontWeight: '600',
                        color: '#000'
                    }}>
                        Random Video
                    </Text>
                </View>

                {/* Video Player */}
                <Video
                    source={{ uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' }}
                    paused={play}
                    repeat={true}
                    resizeMode='cover'
                    controls={false}
                    allowsExternalPlayback={true}
                    onProgress={(data)=> handleLength(data.seekableDuration)}
                    style={{
                        borderRadius: normalize(15),
                        width: normalize(300),
                        height: normalize(180),
                        alignSelf: 'center',
                        marginTop: normalize(20)
                    }}
                    playWhenInactive={false}
                    hideShutterView={true}
                    ref={(ref) => console.log('REF VIDEO: ', ref)}
                />
                {/* Video Player */}
                {/* Player Part */}
                <AnimatedCircularProgress
                    size={300}
                    width={25}
                    fill={value}
                    tintColor="#00e0ff"
                    // onAnimationComplete={(data) => !data.finished ? setVal(0) : null}
                    onFillChange={() =>
                        {setVal(length);
                        console.log(length)
                        }
                    }
                    backgroundColor="#fff"
                    lineCap={'round'}
                    children={(data)=> console.log('DATA: ', data)}
                    // prefill={0}
                    backgroundWidth={'23'}
                    // durat ion={'500'}
                    // easing={()=> Easing.ease}
                    tintTransparency={false}
                    // tintColorSecondary={'#ccc'}
                    style={{
                        alignSelf: 'center',
                        marginTop: normalize(15),
                        position: 'relative',
                        transform: [{ rotate: '127deg' }]
                    }}
                    renderCap={({ center }) =>
                        <Circle cx={center.x} cy={center.y} r="13" fill="#000" strokeWidth='3' stroke={'#fff'} />
                    }
                />
                <TouchableOpacity style={{
                    width: normalize(90),
                    height: normalize(90),
                    alignSelf: 'center',
                    marginTop: normalize(-60),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: normalize(100),
                    backgroundColor: '#ccc',
                    borderWidth: 10,
                    borderColor: '#fff'
                }} onPress={() => {setPlay(!play)}}>
                    <Image
                        source={require('../../assets/images/play.png')}
                        style={{
                            resizeMode: 'contain',
                            width: normalize(30),
                            height: normalize(30),
                        }}
                    />
                </TouchableOpacity>
                {/* Player Part */}
            </View>
        </SafeAreaView>
    )
}

export default VideoNew;