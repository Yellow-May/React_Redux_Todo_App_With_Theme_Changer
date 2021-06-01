import { createGlobalStyle, ThemeProps } from "styled-components";
import themeData from "./themes";

export default createGlobalStyle(({theme}: ThemeProps< ReturnType<typeof themeData> >) => ({
	"*": {
		margin: 0,
		padding: 0,
		outline: "none",
		boxSizing: "border-box",
	},

	body: {
		background: `url(${theme.bgDesk}) 0 0/cover no-repeat`,
	}
}));
