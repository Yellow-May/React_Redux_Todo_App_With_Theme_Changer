import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { currentTheme, toggleTheme } from "../redux/slices/themeSlice";
import { HeaderDock, Title, Button } from "../styles";
import moonIcon from "../assets/icons/icon-moon.svg";
import sunIcon from "../assets/icons/icon-sun.svg";

const Header = () => {
	const theme = useAppSelector(currentTheme);
	const dispatch = useAppDispatch();

	return (
		<HeaderDock>
			<Title>Todo App</Title>
			<Button title={`switch theme to ${theme === "dark" ? "light" : "dark"}`} onClick={() => dispatch(toggleTheme())}>
				<img src={theme === "dark" ? sunIcon : moonIcon} alt='moon' />
			</Button>
		</HeaderDock>
	);
};

export default Header;
