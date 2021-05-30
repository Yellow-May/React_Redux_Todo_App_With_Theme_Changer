import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { currentTheme, toggleTheme } from "../redux/slices/themeSlice";
import moonIcon from "../assets/icons/icon-moon.svg";
import sunIcon from "../assets/icons/icon-sun.svg";

const Header = () => {
	const theme = useAppSelector(currentTheme);
	const dispatch = useAppDispatch();

	return (
		<header>
			<h1>Todo App</h1>
			<button title='switch theme' onClick={() => dispatch(toggleTheme())}>
				<img src={theme === "dark" ? sunIcon : moonIcon} alt='moon' />
			</button>
		</header>
	);
};

export default Header;
