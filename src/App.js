import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";

function App() {
  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor} !important;
  `;

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <MainContainer>
          <Nav />
          <button onClick={() => themeToggler()}>Change Theme</button>

          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/movie/:id" element={<MovieScreen />} />
          </Routes>
        </MainContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
