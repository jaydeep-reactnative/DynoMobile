import React from 'react'
import { SafeAreaView } from 'react-native'
import { TextInputWithLabel, TextInputWithLabelAndTooltip, LabelWithDropDown,LabelWithCheckbox } from '../../components'

export const MoleculeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInputWithLabel />
      <TextInputWithLabelAndTooltip/>
      <LabelWithDropDown />
      <LabelWithCheckbox rightText='Set Favourites'/>
      <LabelWithCheckbox rightText='Set Recurring'/>
    </SafeAreaView>
  );
};
