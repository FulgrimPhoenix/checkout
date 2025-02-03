import { Checkbox, FormControlLabel, Grid2, TextField } from "@mui/material";
import { pink } from "@mui/material/colors";
import { PAYMENT_INPUT_LIST } from "./PaymentMethod.const";

export const PaymentMethod = () => {
  return (
    <Grid2 container spacing={3}>
      {PAYMENT_INPUT_LIST.map((input) => (
        <Grid2 size={input.size}>
          <TextField
            id={input.name}
            label={input.name}
            variant="standard"
            type={input.type}
            required={input.required ? true : false}
            sx={{ width: "100%" }}
            helperText={input.helperText}
          />
        </Grid2>
      ))}
      <Grid2 size={12}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                p: "9px",
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          label="Remember credit card details for next time"
        />
      </Grid2>
    </Grid2>
  );
};
