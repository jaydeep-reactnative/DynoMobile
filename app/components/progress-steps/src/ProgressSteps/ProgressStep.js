/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ProgressButtons from './ProgressButtons';

class ProgressStep extends Component {
  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    // Return out of method before moving to next step if errors exist.
    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.nextBtnStyle
    };

    const btnTextStyle = {
      color: '#ec5990',
      fontWeight: 'bold',
      fontSize: 18,
      letterSpacing: 0.5,
      textDecorationLine: 'underline',
      ...this.props.nextBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    const textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) {
      textStyle.push(disabledBtnText);
    }

    return (
      <TouchableOpacity
        style={btnStyle}
        disabled={this.props.nextBtnDisabled}
        onPress={
          this.props.activeStep === this.props.stepCount - 1
            ? this.onSubmit
            : this.onNextStep
        }>
        <Text style={textStyle}>
          {this.props.activeStep === this.props.stepCount - 1
            ? this.props.finishBtnText
            : this.props.nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.previousBtnStyle
    };

    const btnTextStyle = {
      color: '#ec5990',
      fontWeight: 'bold',
      fontSize: 18,
      letterSpacing: 0.5,
      textDecorationLine: 'underline',
      ...this.props.previousBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    const textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) {
      textStyle.push(disabledBtnText);
    }

    return (
      <TouchableOpacity
        style={btnStyle}
        disabled={this.props.previousBtnDisabled}
        onPress={this.onPreviousStep}>
        <Text style={textStyle}>
          {this.props.activeStep === 0 ? '' : this.props.previousBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const scrollViewProps = this.props.scrollViewProps || {};
    const viewProps = this.props.viewProps || {};
    const isScrollable = this.props.scrollable;
    const previousBottomSpace = this.props.previousBottomSpace;
    const nextBottomSpace = this.props.nextBottomSpace;
    const buttonRow = this.props.removeBtnRow ? null : (
      <ProgressButtons
        renderNextButton={this.renderNextButton}
        renderPreviousButton={this.renderPreviousButton}
        previousBottomSpace={previousBottomSpace}
        nextBottomSpace={nextBottomSpace}
      />
    );

    return (
      <View style={{ flex: 1, backgroundColor: '#0e101c' }}>
        {isScrollable ? (
          <View style={{ flex: 1, backgroundColor: '#0e101c' }}>
            {this.props.children}
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: '#0e101c' }} {...viewProps}>
            {this.props.children}
          </View>
        )}

        {buttonRow}
      </View>
    );
  }
}

ProgressStep.propTypes = {
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
  nextBottomSpace: PropTypes.number
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit',
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true
};

export default ProgressStep;
