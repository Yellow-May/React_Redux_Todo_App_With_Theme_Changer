import {DefaultTheme} from "styled-components";

import darkBgDesk from "../assets/images/bg-desktop-dark.jpg";
import darkBgMob from "../assets/images/bg-mobile-dark.jpg";
import lightBgDesk from "../assets/images/bg-desktop-light.jpg";
import lightBgMob from "../assets/images/bg-mobile-light.jpg";

export const themeData = (theme: "dark" | "light") => {
	if (theme === "light")
		return {
			bgDesk: lightBgDesk,
			bgMob: lightBgMob,
			bgPrimary: "hsl(236, 33%, 92%)",
			bgSecondary: "hsl(0, 0%, 98%)",
			txtPrimary: "hsl(235, 21%, 11%)",
			txtSecondary: "hsl(234, 11%, 52%)",
			txtCompleted: "hsl(233, 14%, 35%)",
			txtHover: "hsl(235, 21%, 11%)",
			borderPrimary: "hsl(236, 33%, 92%)",
			checkBorder: "hsl(236, 33%, 92%)",
			wrapperShadow: "#000", 
		} as DefaultTheme;

	return {
		bgDesk: darkBgDesk,
		bgMob: darkBgMob,
        bgPrimary: "hsl(235, 21%, 11%)",
        bgSecondary: "hsl(235, 24%, 19%)",
        txtPrimary: "hsl(234, 39%, 85%)",
        txtSecondary: "hsl(234, 11%, 52%)",
		txtCompleted: "hsl(233, 14%, 35%)",
        txtHover: "hsl(236, 33%, 92%)",
        borderPrimary: "hsl(233, 14%, 35%)",
		checkBorder: "hsl(237, 14%, 26%)",
		wrapperShadow: "#000",
	} as DefaultTheme;
};

export default themeData;
