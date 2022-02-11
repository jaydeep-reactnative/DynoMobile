import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View
      style={{
        position: 'absolute',
        left: 60,
        bottom: props.previousBottomSpace
      }}>
      {props.renderPreviousButton()}
    </View>
    <View
      style={{ position: 'absolute', right: 60, bottom: props.nextBottomSpace }}>
      {props.renderNextButton()}
    </View>
  </View>
);
ProgressButtons.propTypes = {
  previousBottomSpace: PropTypes.number,
  renderPreviousButton: PropTypes.func,
  nextBottomSpace: PropTypes.number,
  renderNextButton: PropTypes.func
}
export default ProgressButtons
