import { IInput } from "src/types/input.types";

export const ADDRESS_INPUT_LIST: IInput[] = [
  {
    name: "First name",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Last name",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Address line 1",
    size: { xs: 12, sm: 12, md: 12 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Address line 2",
    size: { xs: 12, sm: 12, md: 12 },
    required: false,
    helperText: "",
    type: "text",
  },
  {
    name: "City",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "State/Province/Region",
    size: { xs: 12, sm: 12, md: 6 },
    required: false,
    helperText: "",
    type: "text",
  },
  {
    name: "Zip / Postal code",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
  {
    name: "Country",
    size: { xs: 12, sm: 12, md: 6 },
    required: true,
    helperText: "",
    type: "text",
  },
];
