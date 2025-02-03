import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormContainerRoot } from "./FormContainer.styles";
import { STEPS, STEPS_TITLES } from "./FormContainer.const";

export const FormContainer = ({
  children,
}: {
  children?: React.ReactNode[];
}) => {
  const [activeStep, setActiveStep] = useState(0);

  function handleChangeStep(step: -1 | 1) {
    if (activeStep + step >= 0 || activeStep + step < STEPS.length) {
      setActiveStep(activeStep + step);
    }
  }

  return (
    <FormContainerRoot>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ padding: "24px 0 40px" }}>
        {STEPS.map((label, i) => (
          <Step key={i}>
            <StepLabel color="secondary">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography component="h6" variant="h6" gutterBottom>
        {STEPS_TITLES[activeStep]}
      </Typography>
      {children?.map((el, i) => i === activeStep && el)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep > 2 ? (
          <></>
        ) : (
          <>
            {activeStep !== 0 && (
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
              {activeStep === 2 ? "Place order" : "Next"}
            </Button>
          </>
        )}
      </Box>
    </FormContainerRoot>
  );
};
