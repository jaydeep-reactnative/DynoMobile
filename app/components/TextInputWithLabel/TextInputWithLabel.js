import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

export const TextInputWithLabel = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={{marginTop:30,marginLeft:30,marginHorizontal:30}}>
                <Text style={{color:'#6f7faf',fontSize:13,letterSpacing:0.09}}>Amount</Text>
                <TextInput style={{marginTop:12, height:38, borderRadius:15, borderWidth: 1, borderColor:'#01ccce'}} />
            </View>
        </View>
    </SafeAreaView>
  );
};

TextInputWithLabel.propTypes = {
    label: PropTypes.string,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
    onSubmit: PropTypes.func,
    setActiveStep: PropTypes.func,
    nextBtnText: PropTypes.string,
    previousBtnText: PropTypes.string,
    finishBtnText: PropTypes.string,
    stepCount: PropTypes.number,
    nextBtnStyle: PropTypes.object,
    nextBtnTextStyle: PropTypes.object,
    nextBtnDisabled: PropTypes.bool,
    previousBtnStyle: PropTypes.object,
    previousBtnTextStyle: PropTypes.object,
    previousBtnDisabled: PropTypes.bool,
    scrollViewProps: PropTypes.object,
    viewProps: PropTypes.object,
    errors: PropTypes.bool,
    removeBtnRow: PropTypes.bool,
    scrollable: PropTypes.bool,
    previousBottomSpace: PropTypes.number,
    nextBottomSpace: PropTypes.number,
};
  
TextInputWithLabel.defaultProps = {
    nextBtnText: 'Next',
    previousBtnText: 'Previous',
    finishBtnText: 'Submit',
    nextBtnDisabled: false,
    previousBtnDisabled: false,
    errors: false,
    removeBtnRow: false,
    scrollable: true,
};
