import styled from "styled-components";
import checkIcon from "../assets/icons/icon-check.svg";

export const AppWrapper = styled.div({
	width: "95%",
	margin: "50px auto",

	"@media(min-width: 640px)":{
		width: "600px",
		margin: "100px auto"
	}
})

export const HeaderDock = styled.header({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	color: 'white',
	marginBottom: 48,
	
	"@media(max-width: 640px)" : {
		marginBottom: 32,
	}
});

export const Title = styled.h1({
	textTransform: "uppercase",
	letterSpacing: 10,

	"@media(max-width: 640px)" : {
		letterSpacing: 5
	}
});

export const SectionWrapper = styled.div(({theme}) => ({
	boxShadow: `0rem 0.5rem 3rem ${theme.wrapperShadow}`
}))

type BoxProps = { rounded?: boolean; roundedBot?: boolean; flexBetween?: boolean }

export const Box = styled.div<BoxProps>((props) => ({
	width: "100%",
	height: props.flexBetween ? "auto" : 48,
	padding: 16,
	display: "flex",
	flexDirection: props.flexBetween ? "column" : "unset",
	justifyContent: props.flexBetween ? "center" : "flex-start",
	alignItems: "center",
	gap: 16,
	backgroundColor: props.theme.bgSecondary,
	borderBottom: props.roundedBot || props.rounded ? "none" : `thin solid ${props.theme.borderPrimary}`,
	borderRadius: props.rounded ? 7.5 : props.roundedBot ? "0 0 7.5px 7.5px" : 0,
	marginBottom: props.rounded ? 32 : 0,

	"&:hover button": {
		opacity: 1,
	},

	"@media(min-width: 640px)":{
		height: 48,
		marginBottom: props.rounded ? 48 : 0,
		flexDirection: props.flexBetween ? "row" : "unset",
		justifyContent: props.flexBetween ? "space-between" : "flex-start",
	},
}));

export const CheckBox = styled.div<{inactive?: boolean}>(({inactive, theme}) => ({
	position: "relative",
	width: 20,
	height: 20,
	borderRadius: "50%",

	"input, span": {
		position: "absolute",
		width: "100%",
		height: "100%",
	},

	input: {
		opacity: 0,
		cursor: inactive ? "unset" : "pointer",

		"&:checked + span": {
			background: `url(${checkIcon}) 50% 60% no-repeat , linear-gradient(90deg,hsl(192, 100%, 67%),hsl(280, 87%, 65%))`,
			border: "none",
		},
	},

	span: {
		pointerEvents: "none",
		borderRadius: "inherit",
		transition: "0.25s",
		border: `thin solid ${theme.checkBorder}`,
	},

	"&:hover span": {
		borderColor: inactive ?  theme.checkBorder : "hsl(192, 100%, 67%)"
	},
}));

export const BoxTitle = styled.h4<{checked: boolean}>((props) => ({
	flexGrow: 1,
	fontWeight: 400,
	textDecoration: props.checked ? "line-through" : "none",
	opacity: props.checked ? 0.5 : 1,
	color: props.checked ? props.theme.txtSecondary : props.theme.txtPrimary,
	
}));

export const BoxInput = styled.input(({theme}) => ({
	flexGrow: 1,
	height: "100%",
	outline: "none",
	border: "none",
	background: "transparent",
	color: theme.txtPrimary,

	"&::placeholder": {
		color: theme.txtPrimary
	}
}));

export const FilterGroup = styled.div({
	display: "flex",
	gap: 10,
});

type ButtonProps = { opacity?: number, filterBtn?: boolean, active?: boolean }

export const Button = styled.button<ButtonProps>(({opacity = 1, filterBtn, active, theme}) => ({
	outline: "none",
	border: "none",
	background: "none",
	cursor: "pointer",
	transition: "0.25s",
	opacity: opacity,
	color: active? "hsl(220, 98%, 61%)" : theme.txtSecondary,

	"&:hover":{
		color: filterBtn ? theme.txtHover : theme.txtSecondary
	},
}));