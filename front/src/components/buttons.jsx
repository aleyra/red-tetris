import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

//ajouter sx={{ color: 'black'}} aux param du bouton
export const SoloNormalModeButton = styled(Button)({
	boxShadow: 'none',
	width: '400px',
	height: '126px',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#00ffff',
	borderColor: '#00aaaa',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#00ffff',
		borderColor: '#00ffff',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00aaaa',
		borderColor: '#00aaaa',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const MultiModeButton = styled(Button)({
	boxShadow: 'none',
	width: '400px',
	height: '126px',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#0000ff',
	borderColor: '#0000aa',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#0000ff',
		borderColor: '#0000ff',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#0000aa',
		borderColor: '#0000aa',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const SoloEasyModeButton = styled(Button)({
	boxShadow: 'none',
	width: '400px',
	height: '126px',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#ffaa00',
	borderColor: '#aa5500',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#ffaa00',
		borderColor: '#ffaa00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#aa5500',
		borderColor: '#aa5500',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const SoloHardModeButton = styled(Button)({
	boxShadow: 'none',
	width: '400px',
	height: '126px',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#ffff00',
	borderColor: '#aaaa00',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#ffff00',
		borderColor: '#ffff00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#aaaa00',
		borderColor: '#aaaa00',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const FriendModeButton = styled(Button)({
	boxShadow: 'none',
	width: '400px',
	height: '126px',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#00ff00',
	borderColor: '#00aa00',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#00ff00',
		borderColor: '#00ff00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00aa00',
		borderColor: '#00aa00',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

//ajouter sx={{ color: 'black'}} aux param du bouton
export const CyanColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#00ffff',
	borderColor: '#00aaaa',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#00ffff',
		borderColor: '#00ffff',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00aaaa',
		borderColor: '#00aaaa',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const BlueColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#0000ff',
	borderColor: '#0000aa',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#0000ff',
		borderColor: '#0000ff',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#0000aa',
		borderColor: '#0000aa',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const OrangeColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#ffaa00',
	borderColor: '#aa5500',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#ffaa00',
		borderColor: '#ffaa00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#aa5500',
		borderColor: '#aa5500',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

//ajouter sx={{ color: 'black'}} aux param du bouton
export const YellowColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#ffff00',
	borderColor: '#aaaa00',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#ffff00',
		borderColor: '#ffff00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#aaaa00',
		borderColor: '#aaaa00',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

//ajouter sx={{ color: 'black'}} aux param du bouton
export const GreenColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#00ff00',
	borderColor: '#00aa00',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#00ff00',
		borderColor: '#00ff00',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00aa00',
		borderColor: '#00aa00',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const PurpleColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#9900ff',
	borderColor: '#4400aa',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#9900ff',
		borderColor: '#9900ff',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#4400aa',
		borderColor: '#4400aa',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});

export const RedColoredButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 20,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#ff0000',
	borderColor: '#aa0000',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#ff0000',
		borderColor: '#ff0000',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#aa0000',
		borderColor: '#aa0000',
	},
	'&:focus': {
		adow: '0 0 0 0.2rem rgba(0,0,0,.5)',
	},
});