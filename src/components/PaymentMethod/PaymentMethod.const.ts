import { IInput } from "src/types/input.types";

export const PAYMENT_INPUT_LIST: IInput[] = [
  {
    name: "Name on card",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Card number",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Expiry date",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "CVV",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "Last three digits on signature strip",
    type: "text",
  },
];
