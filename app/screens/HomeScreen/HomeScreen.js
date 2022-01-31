// import {Checkbox, CheckIcon, Radio, Select} from 'native-base';
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import {FormController} from '../../utils/FormController';
import {ProgressStep, ProgressSteps} from '../../components/progress-steps';
import HomeScreenStyle from './HomeScreenStyle';
/**
 * Initial raw data.
 */
const data = [
  {
    type: 'textinput',
    name: 'firstname',
    value: '',
    visible: true,
    page: 'login',
    preCondition: {
      name: 'login.email',
      value: 'yasser',
    },
  },
  {
    type: 'textinput',
    name: 'lastname',
    value: '',
    visible: true,
    page: 'login',
    preCondition: {
      name: 'loginModal.items.modal1.pincode2',
      value: '123456',
    },
  },
  {
    type: 'textinput',
    name: 'email',
    value: '',
    visible: true,
    page: 'login',
  },
  {
    type: 'textinput',
    name: 'phoneno',
    value: '',
    preCondition: {
      name: 'lastname',
      value: 'jaydeep',
    },
    visible: true,
    page: 'login',
  },
  {
    type: 'textinput',
    name: 'university',
    value: '',
    visible: true,
    page: 'signup',
  },
  {
    type: 'textinput',
    name: 'address',
    value: '',
    visible: true,
    page: 'forgotpassword',
  },
  // {
  //   type: 'checkbox',
  //   name: 'checkbox',
  //   value: [],
  //   visible: true,
  //   page: 'forgotpassword',
  // },
  // {
  //   type: 'radio',
  //   name: 'radio',
  //   value: '',
  //   visible: true,
  //   page: 'forgotpassword',
  // },
];

/**
 * Props for progress steps.
 */
export const PROGRESSSTEPS = {
  activeStepIconBorderColor: '#ec5990',
  activeLabelColor: '#5D52AC',
  activeStepNumColor: '#404175',
  activeStepIconColor: '#ffffff',
  completedStepIconColor: '#ec5990',
  completedProgressBarColor: '#ec5990',
  disabledStepIconColor: '#E0E0E0',
  disabledStepNumColor: '#5D52AC',
  completedLabelColor: '#ffffff',
};

/**
 * Set form structure to filter & modify further.
 */
let forms = {};
for (let value of data) {
  if (value.items) {
    forms[value.name] = value;
  } else {
    forms[value.page] = forms[value.page] || {};
    forms[value.page][value.name] = value;
  }
}

/**
 * Function to check type as modal.
 */
const hasModal = name => {
  return data.find(form => form.items && form.page === name);
};

let render = 0;
export const HomeScreen = ({navigation}) => {
  render += 1;
  /**
   * Create reference from forms data.
   * Assign forms data to initialState
   */
  const myControl = useRef(forms);
  const [initialState, setInitialState] = useState(forms);
  // const [isModalVisible, setModalVisible] = useState(false);

  /**
   * Update form value using reference and checked preCondition.
   */
  const updateReference = (value, formName, name) => {
    myControl.current[formName][name].value = value;
    checkPreCondition(name, formName, value);
  };

  /**
   * Check preCondition and set visible flag false to hide from page.
   */
  const checkPreCondition = (name, formName, value) => {
    let preCondition = initialState[formName][name].preCondition;
    if (preCondition) {
      if (preCondition.value === value) {
        let keys = preCondition.name.split('.');
        let val = myControl.current;
        for (let key of keys) {
          val = val[key];
        }
        val.visible = false;
        setInitialState({...myControl.current});
      }
    }
  };

  const onSubmit = () => {
    console.log('onSubmit: ', myControl.current);
    navigation.goBack();
  };

  /**
   * Callback function to submit values from modal.
   */
  const submitValues = (values, mainForm) => {
    myControl.current[mainForm].items = {
      ...myControl.current[mainForm].items,
      ...values,
    };
  };

  /**
   * Render form values using FormController.
   */
  const renderForm = (form, formName) => {
    let modal = hasModal(formName);
    return (
      <View style={HomeScreenStyle.container}>
        <ScrollView>
          <Text style={HomeScreenStyle.renderLabel}>Render: {render}</Text>
          <View style={HomeScreenStyle.containerView}>
            {Object.entries(form).map(([key, f]) => {
              return (
                <FormController
                  updateReference={updateReference}
                  key={key}
                  name={key}
                  control={myControl}
                  formName={formName}
                  render={({onChange, value}) => {
                    return f.visible ? (
                      <View>
                        {f.type === 'textinput' && (
                          <View>
                            <Text style={HomeScreenStyle.label}>{key}</Text>
                            <TextInput
                              style={HomeScreenStyle.input}
                              onChangeText={inputValue => onChange(inputValue)}
                              value={value}
                              autoCapitalize="none"
                              autoCorrect={false}
                            />
                          </View>
                        )}
                        {f.type === 'dropdown' && (
                          <View style={HomeScreenStyle.dropdown}>
                            {/* <Select
                              selectedValue={value}
                              minWidth={200}
                              accessibilityLabel="Gender"
                              placeholder="Gender"
                              onValueChange={itemValue => onChange(itemValue)}
                              color="black"
                              backgroundColor="white"
                              _selectedItem={{
                                bg: 'cyan.600',
                                endIcon: <CheckIcon size={4} />,
                              }}>
                              <Select.Item
                                label="Male"
                                value="m"
                                color="white"
                              />
                              <Select.Item label="Female" value="f" />
                            </Select> */}
                          </View>
                        )}
                        {f.type === 'checkbox' && (
                          <View style={HomeScreenStyle.dropdown}>
                            {/* <Checkbox.Group onChange={onChange} value={value}>
                              <Checkbox value="item1" aria-label="item1">
                                <Text style={HomeScreenStyle.checkboxItem}>Item 1</Text>
                              </Checkbox>
                              <Checkbox value="item2" my={2} aria-label="item2">
                                <Text style={HomeScreenStyle.checkboxItem}>Item 2</Text>
                              </Checkbox>
                              <Checkbox value="item3" aria-label="item3">
                                <Text style={HomeScreenStyle.checkboxItem}>Item 3</Text>
                              </Checkbox>
                              <Checkbox value="item4" my={2} aria-label="item4">
                                <Text style={HomeScreenStyle.checkboxItem}>Item 4</Text>
                              </Checkbox>
                            </Checkbox.Group> */}
                          </View>
                        )}
                        {f.type === 'radio' && (
                          <View style={HomeScreenStyle.dropdown}>
                            {/* <Radio.Group
                              name="myRadioGroup"
                              value={value}
                              onChange={nextValue => {
                                onChange(nextValue);
                              }}>
                              <Radio value="wrong" aria-label="wrong" my={1}>
                                <Text style={HomeScreenStyle.checkboxItem}>Wrong</Text>
                              </Radio>
                              <Radio value="right" aria-label="right" my={1}>
                                <Text style={HomeScreenStyle.checkboxItem}>Right</Text>
                              </Radio>
                            </Radio.Group> */}
                          </View>
                        )}
                      </View>
                    ) : null;
                  }}
                />
              );
            })}
          </View>
          {modal && (
            <View style={HomeScreenStyle.button}>
              <Button
                color
                style={HomeScreenStyle.buttonInner}
                title="Open Modal"
                onPress={() => {
                  navigation.navigate('modalscreen3', {
                    data: modal.items,
                    formName: modal.name,
                    submitValues,
                  });
                }}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <ProgressSteps {...PROGRESSSTEPS} topOffset={10}>
      {Object.entries(forms)
        .filter(([_, form]) => !form.items)
        .map(([key, form]) => {
          return (
            <ProgressStep
              key={key}
              onSubmit={onSubmit}
              previousBottomSpace={40}
              nextBottomSpace={40}>
              {renderForm(form, key)}
            </ProgressStep>
          );
        })}
    </ProgressSteps>
  );
};
