import { ChakraProvider, Heading, theme } from "@chakra-ui/react";
import * as React from "react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Hello World!</Heading>
  </ChakraProvider>
);
