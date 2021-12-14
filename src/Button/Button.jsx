import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size, label, variant, type, disabled, ...props }) => {
	return (
		<button
			type='button'
			className={`btn btn--${type}-${variant} btn--${size}`}
			disabled={disabled}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	// primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	// backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * -
	 */
	variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
	/**
	 * -
	 */
	type: PropTypes.oneOf(['filled', 'border']),
	/**
	 * -
	 */
	disabled: PropTypes.oneOf(['true', 'false']),
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	label: 'Button',
	variant: 'primary',
	type: 'filled',
	size: 'medium',
	disabled: false,
	onClick: undefined,
};
