import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Rating } from './Rating';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars=Template.bind({});
EmptyStars.args={

}