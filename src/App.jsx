import Main from "./layout/Main";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
// import { ColorModeScript } from "@chakra-ui/color-mode";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode}> */}
        <Main />
        {/* </ColorModeScript> */}
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
