import React, { Component } from 'react'
import { View,SafeAreaView } from 'react-native'
import { times } from 'lodash'
import PropTypes from 'prop-types'
import StepIcon from './StepIcon'

class ProgressSteps extends Component {
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    const step = [];

    times(this.state.stepCount, i => {
      const isCompletedStep = this.props.isComplete
        ? true
        : i < this.state.activeStep;

      const isActiveStep = this.props.isComplete
        ? false
        : i === this.state.activeStep;

      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = step => {
    // Guard against setting current step higher than total step count.
    if (step >= this.state.stepCount - 1) {
      this.setState({ activeStep: this.state.stepCount - 1 });
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({ activeStep: step });
    }
  };

  render() {
    const styles = {
      stepIcons: {
        position: 'relative',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
        top: this.props.topOffset,
        marginBottom: this.props.marginBottom,
        backgroundColor: '#0e101c'
      }
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0e101c' }}>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{ flex: 1, backgroundColor: '#5D52AC' }}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount
          })}
        </View>
      </SafeAreaView>
    );
  }
}

ProgressSteps.propTypes = {
  isComplete: PropTypes.bool,
  activeStep: PropTypes.number,
  topOffset: PropTypes.number,
  marginBottom: PropTypes.number,
  children: PropTypes.object
};

ProgressSteps.defaultProps = {
  isComplete: false,
  activeStep: 0,
  topOffset: 30,
  marginBottom: 50
};

export default ProgressSteps
