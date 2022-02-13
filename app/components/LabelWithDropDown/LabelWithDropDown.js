import React,{ useState } from 'react'
import { View, Text } from 'react-native'
import DropDownPicker from '../DropDownPicker'
import PropTypes from 'prop-types'

export const LabelWithDropDown = (props) => {
  const { 
    inputBorderColor='#DFDFDF',
    inputBorderRadius=15,
    inputBorderWidth=1, 
    textInputStyles, 
    labelName='Select Credit Card', 
    labelColor='#6f7faf', 
    labelFontSize= 13, 
    labelLetterSpacing=0.09, 
    labelStyles } = props
  const dropDownStyle= { marginTop:12, height:38, borderRadius:inputBorderRadius, borderWidth: inputBorderWidth, borderColor:inputBorderColor, ...textInputStyles }
  const labelStyle= { color: labelColor,fontSize:labelFontSize,letterSpacing:labelLetterSpacing,...labelStyles }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'card1', value: 'card1' },
    { label: 'card2', value: 'card2' }
  ]);

  return (
    <View style={{ marginTop:30,marginLeft:30,marginHorizontal:30 }}>
      <Text style={labelStyle}>{labelName}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={dropDownStyle}
      />
    </View>
  );
};

LabelWithDropDown.propTypes = {
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
