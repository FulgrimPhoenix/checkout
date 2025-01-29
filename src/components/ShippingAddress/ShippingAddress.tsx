import { Grid2, TextField } from "@mui/material";
import { INPUT_LIST } from "./ShippingAddress.const";

export const ShippingAddress = () => {
  return (
    <Grid2 container spacing={3}>
      {INPUT_LIST.map((input) => (
        <Grid2 size={input.size}>
          <TextField
            id={input.name}
            label={input.name}
            variant="standard"
            required={input.required ? true : false}
            sx={{ width: "100%" }}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};
