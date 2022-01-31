import {useState} from 'react';

export const FormController = props => {
  // console.log('current', props.control.current);
  const [field, setField] = useState(
    props.control.current[props.formName][props.name].value,
  );

  const onChange = value => {
    props.updateReference(value, props.formName, props.name);
    setField(value);
  };

  return props.render({onChange, value: field});
};
