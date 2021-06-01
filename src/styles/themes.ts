import {DefaultTheme} from "styled-components";

import darkBgDesk from "../assets/images/bg-desktop-dark.jpg";
import darkBgMob from "../assets/images/bg-mobile-dark.jpg";
import lightBgDesk from "../assets/images/bg-desktop-light.jpg";
import lightBgMob from "../assets/images/bg-mobile-light.jpg";

export const themeData = (theme: "dark" | "light") => {
	if (theme === "light")
		return {
			primary: "red",
			bgDesk: lightBgDesk,
			bgMob: lightBgMob,

		} as DefaultTheme;
		
	return {
		primary: "blue",
		bgDesk: darkBgDesk,
		bgMob: darkBgMob,

	} as DefaultTheme;
};

export default themeData;
