import React from "react";
import { storiesOf } from '@storybook/react';
import { TextInput } from '../components/TextInput';


export default {
  title: 'Text Input',
  component: TextInput,
};


const Template = (args) => <TextInput {...args}/>

export const TextInputDefault = Template.bind({});
TextInputDefault.args = {
    label: 'Domain',
    onChange: undefined,
    width: 200,
    value: 'Basic text box'
}
