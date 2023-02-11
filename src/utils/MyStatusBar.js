//import liraries
import React from "react";
import { View, StatusBar, Platform } from "react-native";
import propTypes from "prop-types";
import Colors from '../themes/Colors';
import StatusBarSizeIOS from 'react-native-status-bar-size';
import normalize from '../utils/helpers/dimen'
const MyStatusBar = ({ backgroundColor, barStyle, height, ...props }) =>

  (
    <View
      style={[
        { height: Platform.OS === "ios" ? StatusBarSizeIOS.currentHeight : StatusBar.currentHeight },
        { backgroundColor }
      ]}
    >
      <StatusBar

        translucent
        backgroundColor={backgroundColor}
        {...props}
        barStyle={barStyle}
        hidden={false}
      />
    </View>
  );

export default MyStatusBar;
MyStatusBar.propTypes = {
  backgroundColor: propTypes.string,
  barStyle: propTypes.string,
  height: propTypes.number,
};

MyStatusBar.defaultProps = {
  backgroundColor: Colors.StatusBar,
  barStyle: "light-content",
  height: normalize(20),
};