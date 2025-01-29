interface IInput {
  name: string;
  size: number;
  required: boolean;
}

export const INPUT_LIST: IInput[] = [
  { name: "First name", size: 6, required: true },
  { name: "Last name", size: 6, required: true },
  { name: "Address line 1", size: 12, required: true },
  { name: "Address line 2", size: 12, required: false },
  { name: "City", size: 6, required: true },
  { name: "State/Province/Region", size: 6, required: false },
  { name: "Zip / Postal code", size: 6, required: true },
  { name: "Country", size: 6, required: true },
];
