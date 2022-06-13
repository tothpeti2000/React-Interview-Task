import { ChakraProvider, Heading, theme } from "@chakra-ui/react";
import * as React from "react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Hello World!</Heading>
    <Heading data-testid="apiKey">{process.env.REACT_APP_API_KEY}</Heading>
  </ChakraProvider>
);
