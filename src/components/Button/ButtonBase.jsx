import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'transparent',
		display: 'block',
		WebkitAppearance: 'none',
		border: 'none',
		padding: 0,
		margin: 0,
	},
}));

const ButtonBase = (props) => {
	const { children, className, onClick, disabled } = props;
	const classes = useStyles({});

	return (
		<button
			className={clsx(classes.root, className)}
			href='#'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default ButtonBase;
