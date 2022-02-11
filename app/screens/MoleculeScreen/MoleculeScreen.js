import React from 'react'
import { SafeAreaView } from 'react-native'
import { TextInputWithLabel, TextInputWithLabelAndTooltip } from '../../components'

export const MoleculeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInputWithLabel />
      <TextInputWithLabelAndTooltip/>
    </SafeAreaView>
  );
};
