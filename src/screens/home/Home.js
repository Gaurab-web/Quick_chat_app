import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const Home = (props)=>{
    return(
        <Fragment>
            <View>
                <TouchableOpacity style={{
                    marginLeft:20,
                    marginTop:30
                }} onPress={()=> props.navigation.goBack()}>
                    <Text style={{
                        color:'#000'
                    }}>{'<-- Back'}</Text>
                </TouchableOpacity>

                <View style={{
                    marginTop:80
                }}>
                    <Text style={{
                        textAlign:'center',
                        fontSize:20,
                        fontWeight:'700',
                        color:'#000',
                        borderBottomWidth:1,
                        marginHorizontal:68,
                        borderBottomColor:'#ccc',
                        paddingBottom:15
                    }}>Welcome to Home Page</Text>
                </View>
            </View>
        </Fragment>
    )
}

export default Home;