import React,{ useState } from 'react'
import { View } from 'react-native'
import CheckBox from '../Checkbox'
import PropTypes from 'prop-types'

export const LabelWithCheckbox = () => {
  const [isChecked, setCheckekboxValue] = useState(false);
  const [isFavChecked, setFavCheckekboxValue] = useState(false);

  return (
    <View style={{ marginTop:100,marginLeft:30,marginHorizontal:30 }}>
      <CheckBox
        style={{ flex: 1 }}
        isChecked={isChecked}
        rightText={'Set Recurring'}
        rightTextStyle={{ width:50,height:20, color:'#6F7FAF' }}
        checkedCheckBoxColor='#01CCCE'
        uncheckedCheckBoxColor='#B5B5BE'
        onClick={()=> {setCheckekboxValue(!isChecked)}}
      />
      <CheckBox
        style={{ flex: 1,marginTop:30 }}
        isChecked={isFavChecked}
        rightText={'Set Favourites'}
        rightTextStyle={{ width:50,height:20, color:'#6F7FAF' }}
        checkedCheckBoxColor='#01CCCE'
        uncheckedCheckBoxColor='#B5B5BE'
        onClick={()=> {setFavCheckekboxValue(!isFavChecked)}}
      />
    </View>
  );
};

LabelWithCheckbox.propTypes = {
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
