export interface IInput {
  name: string;
  size: { xs?: number; sm?: number; md: number };
  required: boolean;
  helperText: string;
  type: "text" | "number" | "email" | "tel" | "url";
}
