import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;
const callback = action('accordion mode change event fired')
// const onClickCallBack = action('some item was clicked')
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    titleValue: 'Menu',
    /**
     * overtreatment
     */
    collapsed: true,
    /**
    * onChange: my function
    */
    onChange: callback,

};
