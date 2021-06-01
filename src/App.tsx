import React from "react";
import { useAppSelector } from "./redux/hooks";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ViewTodos from "./components/ViewTodos";
import { currentTheme } from "./redux/slices/themeSlice";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import themeData from "./styles/themes";
import { AppWrapper, SectionWrapper } from "./styles";

function App() {
	const theme = useAppSelector(currentTheme);

	return (
		<ThemeProvider theme={themeData(theme)}>
			<GlobalStyles />
			<AppWrapper>
				<Header />
				<AddTodo />
				<SectionWrapper>
					<ViewTodos />
					<Filters />
				</SectionWrapper>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
