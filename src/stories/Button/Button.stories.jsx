import { Button } from './Button';

export default {
	title: 'Form/Button',
	component: Button,
	argTypes: {
		// backgroundColor: { control: 'color' },
		variant: {
			options: ['primary', 'secondary', 'success', 'danger'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'inline-radio' },
		},
		type: {
			options: ['filled', 'border'],
			control: { type: 'inline-radio' },
		},
		disabled: {
			options: [true, false],
			control: { type: 'inline-radio' },
		},
	},
	parameters: {
		backgrounds: {
			values: [
				{ name: 'dark', value: '#0f0f0f' },
				{ name: 'light', value: '#fefefe' },
			],
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
	type: 'filled',
	label: 'Button',
	variant: 'primary',
	size: 'medium',
};

export const Border = Template.bind({});
Border.args = {
	type: 'border',
	label: 'Button',
	variant: 'primary',
	size: 'medium',
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
	type: 'filled',
	label: 'Button',
	variant: 'primary',
	size: 'medium',
	disabled: true,
};

export const DisabledBorder = Template.bind({});
DisabledBorder.args = {
	type: 'border',
	label: 'Button',
	variant: 'primary',
	size: 'medium',
	disabled: true,
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	label: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Large Button',
};
