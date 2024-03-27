
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const AliasTextField = styled(TextField)({
	'& input:valid + fieldset': {
		borderColor: 'purple',
		borderWidth: 2,
	},
	'& input:invalid + fieldset': {
		borderColor: 'red',
		borderWidth: 2,
	},
	'& input:valid:focus + fieldset': {
		borderLeftWidth: 6,
		padding: '4px !important', // override inline-style
	},
});

export const PassWordTextField = styled(TextField)({
	'& input:valid + fieldset': {
		borderColor: 'red',
		borderWidth: 2,
	},
	'& input:invalid + fieldset': {
		borderColor: 'red',
		borderWidth: 2,
	},
	'& input:valid:focus + fieldset': {
		borderLeftWidth: 6,
		padding: '4px !important', // override inline-style
	},
});