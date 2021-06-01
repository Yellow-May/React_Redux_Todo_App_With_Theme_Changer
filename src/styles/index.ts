import styled from "styled-components";


export const HeaderDock = styled.header({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

export const Title = styled.h1({
	textTransform: "uppercase",
	letterSpacing: 10,
});

export const Box = styled.div<{ rounded?: boolean; roundedBot?: boolean; flexBetween?: boolean }>((props) => ({
	width: "100%",
	height: 48,
	padding: 16,
	display: "flex",
	justifyContent: props.flexBetween ? "space-between" : "flex-start",
	alignItems: "center",
	gap: 16,
	backgroundColor: "#25273c",
	color: "#777a92",
	borderRadius: props.rounded ? 5 : props.roundedBot ? "0 0 5px 5px" : 0,

	"&:hover button": {
		opacity: 1,
	},
}));

export const CheckBox = styled.div({
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
		cursor: "pointer",

		"&:checked + span": {
			background: "red",
			border: "none",
		},
	},

	span: {
		pointerEvents: "none",
		borderRadius: "inherit",
		border: "thin solid blue",
	},

	"&:hover span": {
		borderColor: "green",
	},
});

export const BoxTitle = styled.h4<{checked: boolean}>((props) => ({
	flexGrow: 1,
	fontWeight: 400,
	textDecoration: props.checked ? "line-through" : "none",
	opacity: props.checked ? 0.5 : 1,
	background: props.theme.primary,
}));

export const BoxInput = styled.input({
	flexGrow: 1,
	height: "100%",
	outline: "none",
	border: "none",
	background: "transparent",
});

export const FilterGroup = styled.div({
	display: "flex",
	gap: 10,
});

export const Button = styled.button<{opacity?:number}>(({opacity = 1, theme}) => ({
	outline: "none",
	border: "none",
	background: "none",
	cursor: "pointer",
	transition: "0.25s",
	opacity: opacity,
	color: theme.primary,
}));