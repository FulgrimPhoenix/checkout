import { Grid2, List, ListItem, ListItemText, Typography } from "@mui/material";
import { PAYMENT_INFO, PRODUCT_LIST } from "./OrderSummary.const";
import { OrderListItem } from "./OrderSummary.styles";

export const OrderSummary = () => {
  return (
    <>
      <List sx={{ p: "0" }}>
        {PRODUCT_LIST.map((el) => (
          <OrderListItem key={el.title}>
            <ListItemText
              primary={el.title}
              secondary={el.description ? el.description : null}
            />
            <Typography variant="body2">
              {el.price ? `$${el.price}` : "Free"}
            </Typography>
          </OrderListItem>
        ))}
        <OrderListItem>
          <ListItemText sx={{ p: "2px 0" }} primary={"Total"} />
          <Typography component="h6" variant="subtitle1" sx={{ mt: "0" }}>
            {`$${PRODUCT_LIST.reduce((acc, el) => (acc += el.price), 0)}`}
          </Typography>
        </OrderListItem>
      </List>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography
            component="h6"
            variant="h6"
            sx={{ mt: "16px" }}
            gutterBottom
          >
            Shipping
          </Typography>
          <Typography variant="body1" gutterBottom>
            John Smith
          </Typography>
          <Typography variant="body1" gutterBottom>
            1 Material-UI Drive, Reactville, Anytown, 99999, USA
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography
            component="h6"
            variant="h6"
            sx={{ mt: "16px" }}
            gutterBottom
          >
            Payment details
          </Typography>
          <Grid2 container>
            {PAYMENT_INFO.map((el) => (
              <>
                <Grid2 size={{ xs: 6 }}>
                  <Typography variant="body1" gutterBottom>
                    {el.title}
                  </Typography>
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <Typography variant="body1" gutterBottom>
                    {el.info}
                  </Typography>
                </Grid2>
              </>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};
