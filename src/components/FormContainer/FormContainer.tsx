import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormContainerRoot } from "./FormContainer.styles";
import { pink } from "@mui/material/colors";

export const FormContainer = ({ children }: { children?: React.ReactNode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details", "Review your order"];

  function handleChangeStep(step: -1 | 1) {
    if (activeStep + step >= 0 || activeStep + step < steps.length) {
      setActiveStep(activeStep + step);
    }
  }

  return (
    <FormContainerRoot>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ padding: "24px 0 40px" }}>
        {steps.map((label, i) => (
          <Step key={i}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: "16px" }}>
        <Typography component="h6" variant="h6" gutterBottom>
          {steps[activeStep]}
        </Typography>
      </Box>
      {children}
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label="Use this address for payment details"
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep === 0 ? (
          <></>
        ) : (
          <Button
            onClick={() => handleChangeStep(-1)}
            variant="text"
            color="inherit"
            sx={{ m: "24px 0 0 8px" }}
          >
            Back
          </Button>
        )}

        <Button
          onClick={() => handleChangeStep(1)}
          variant="contained"
          sx={{ m: "24px 0 0 8px" }}
        >
          Next
        </Button>
      </Box>
    </FormContainerRoot>
  );
};
