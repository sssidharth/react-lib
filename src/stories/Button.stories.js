import React from "react";
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button/index';


export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    color: 'secondary'
}

export const Muted = Template.bind({});
Muted.args = {
    label: 'Button',
    color: 'muted'
}