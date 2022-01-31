import React from 'react';
import {View} from 'react-native';

const ProgressButtons = props => (
  <View style={{flexDirection: 'row', marginTop: 90}}>
    <View
      style={{
        position: 'absolute',
        left: 60,
        bottom: props.previousBottomSpace,
      }}>
      {props.renderPreviousButton()}
    </View>
    <View
      style={{position: 'absolute', right: 60, bottom: props.nextBottomSpace}}>
      {props.renderNextButton()}
    </View>
  </View>
);

export default ProgressButtons;
