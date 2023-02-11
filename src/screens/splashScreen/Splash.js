import React,{Fragment, useEffect} from 'react';
import {SafeAreaView,View,ImageBackground} from 'react-native'
import ImagePath from '../../themes/ImagePath'
import MyStatusBar from '../../utils/MyStatusBar'
import Colors from '../../themes/Colors'
export default function Splash(props){

    useEffect(() =>{
        setTimeout(() =>{
            props.navigation.navigate('Skills')

        },2500)
    },[])

    return(
        <Fragment>
            <MyStatusBar backgroundColor={Colors.themeColor}/>
            <ImageBackground source={ImagePath.Splash} style={{flex:1}}/>
         </Fragment>
    )
}