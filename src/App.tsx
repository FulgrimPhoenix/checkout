import React from "react";
import { Header } from "./components/Header/Header";
import { AppRoot, MainContent } from "./App.styles";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { ShippingAddress } from "./components/ShippingAddress/ShippingAddress";

function App() {
  return (
    <AppRoot>
      <Header />
      <MainContent>
        <FormContainer>
          <ShippingAddress />
        </FormContainer>
      </MainContent>
    </AppRoot>
  );
}

export default App;
