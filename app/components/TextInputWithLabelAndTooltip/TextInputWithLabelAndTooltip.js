import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Popable } from '../Tooltip'
import PropTypes from 'prop-types'

export const TextInputWithLabelAndTooltip = (props) => {
  const { 
    placeholder='',
    placeholderTextColor='black',
    inputBorderColor='#DFDFDF',
    inputBorderRadius=15,
    inputBorderWidth=1, 
    textInputStyles, 
    labelName='Biller Code', 
    labelColor='#6f7faf', 
    labelFontSize= 13, 
    labelLetterSpacing=0.09, 
    labelStyles, 
    tooltipLabel='Find Biller Amount In The Bill' } = props
  const textInputStyle = { marginTop:12, height:38, borderRadius:inputBorderRadius, borderWidth: inputBorderWidth, borderColor:inputBorderColor, ...textInputStyles }
  const labelStyle = { color: labelColor,fontSize:labelFontSize,letterSpacing:labelLetterSpacing,...labelStyles }
  const toolTipViewStyle = { width:18, height:18, borderColor:'#6f7faf', borderWidth:1, borderRadius:9, marginLeft:5, alignItems:'center', justifyContent:'center' }
  return (
    <View style={{ marginTop:30,marginLeft:30,marginHorizontal:30 }}>
      <View style={{ flexDirection:'row' }}>
        <Text style={labelStyle}>{labelName}</Text>
        <Popable content={tooltipLabel}>
          <View style={toolTipViewStyle}>
            <Text style={labelStyle}>?</Text>
          </View>
        </Popable>
      </View>
      <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={textInputStyle} />
    </View>
  );
};

TextInputWithLabelAndTooltip.propTypes = {
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
  labelStyles: PropTypes.object,
  tooltipLabel: PropTypes.string
}
