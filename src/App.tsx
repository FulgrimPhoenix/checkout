import { Header } from "./components/Header/Header";
import { AppRoot, MainContent } from "./App.styles";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { ShippingAddress } from "./components/ShippingAddress/ShippingAddress";
import { PaymentMethod } from "./components/PaymentMethod/PaymentMethod";
import { OrderSummary } from "./components/OrderSummary/OrderSummary";
import { ThemeProvider, Typography } from "@mui/material";

import { Footer } from "./components/Footer/Footer";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <Header />
        <MainContent>
          <FormContainer>
            <ShippingAddress />
            <PaymentMethod />
            <OrderSummary />
            <Typography component="h6" variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </FormContainer>
          <Footer />
        </MainContent>
      </AppRoot>
    </ThemeProvider>
  );
}

export default App;
