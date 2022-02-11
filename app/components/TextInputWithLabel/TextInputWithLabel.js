import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export const TextInputWithLabel = (props) => {
  const { 
    placeholder='',
    placeholderTextColor='black',
    inputBorderColor='#01ccce',
    inputBorderRadius=15,
    inputBorderWidth=1, 
    textInputStyles, 
    labelName='Amount', 
    labelColor='#6f7faf', 
    labelFontSize= 13, 
    labelLetterSpacing=0.09, 
    labelStyles } = props
  const textInputStyle= { marginTop:12, height:38, borderRadius:inputBorderRadius, borderWidth: inputBorderWidth, borderColor:inputBorderColor, ...textInputStyles }
  const labelStyle= { color: labelColor,fontSize:labelFontSize,letterSpacing:labelLetterSpacing,...labelStyles }
  
  return (
    <View style={{ marginTop:30,marginLeft:30,marginHorizontal:30 }}>
      <Text style={labelStyle}>{labelName}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={textInputStyle} />
    </View>
  );
};

TextInputWithLabel.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  inputBorderRadius: PropTypes.number,
  inputBorderWidth: PropTypes.number,
  textInputStyles: PropTypes.object,
  labelName: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  labelLetterSpacing: PropTypes.number,
  labelStyles: PropTypes.object
}
