import { Checkbox, FormControlLabel, Grid2, TextField } from "@mui/material";
import { ADDRESS_INPUT_LIST } from "./ShippingAddress.const";
import { pink } from "@mui/material/colors";

export const ShippingAddress = () => {
  return (
    <Grid2 container spacing={3}>
      {ADDRESS_INPUT_LIST.map((input) => (
        <Grid2 key={input.name} size={input.size}>
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
          label="Use this address for payment details"
        />
      </Grid2>
    </Grid2>
  );
};
