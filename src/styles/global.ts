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
		background: `url(${theme.bgDesk}) 0 0  no-repeat, ${theme.bgPrimary}`,
		paddingBottom: 20,
		fontSize: 16,

		small : {
			color: theme.txtSecondary
		},

		"@media(max-width: 640px)" : {
			fontSize: 11,

			backgroundImage: `url(${theme.bgMob})`
		}
	}
}));
