import React,{ useState } from 'react'
import { View } from 'react-native'
import CheckBox from '../Checkbox'
import PropTypes from 'prop-types'

export const LabelWithCheckbox = (props) => {
  const { 
    checkBoxStyles, 
    rightText='Set Recurring', 
    leftText='Set Favourites',
    rightTextStyles,
    checkedCheckBoxColor='#01CCCE',
    uncheckedCheckBoxColor='#B5B5BE'
  } = props
  const [isChecked, setCheckekboxValue] = useState(false);
  const checkBoxStyle = { flex:1, ...checkBoxStyles }
  const rightTextStyle = { width:50,height:20, color:'#6F7FAF', ...rightTextStyles }

  return (
    <View style={{ marginTop:60,marginLeft:30,marginHorizontal:30 }}>
      <CheckBox
        style={checkBoxStyle}
        isChecked={isChecked}
        rightText={rightText}
        rightTextStyle={rightTextStyle}
        checkedCheckBoxColor={checkedCheckBoxColor}
        uncheckedCheckBoxColor={uncheckedCheckBoxColor}
        onClick={()=> {setCheckekboxValue(!isChecked)}}
      />
    </View>
  );
};

LabelWithCheckbox.propTypes = {
  checkBoxStyles: PropTypes.object,
  rightTextStyles: PropTypes.object,
  leftTextStyles: PropTypes.object,
  rightText: PropTypes.string,
  leftText: PropTypes.string,
  checkedCheckBoxColor: PropTypes.string,
  uncheckedCheckBoxColor: PropTypes.string
}
