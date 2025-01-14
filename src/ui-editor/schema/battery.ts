// eslint-disable-next-line import/extensions
import { getEntitySeparatedSelectionSchema, getBaseMainConfigSchema, customColorsSchema, getEntityCombinedSelectionSchema } from "./_schema-base";

const mainSchema = {
  ...getBaseMainConfigSchema("battery"),

  schema: [
    ...getBaseMainConfigSchema("battery").schema,
    {
      name: "invert_state",
      label: "Invert State",
      selector: { boolean: {} },
    },
  ],
};

const stateOfChargeSchema = [
  {
    name: "state_of_charge",
    label: "State of Charge Entity",
    selector: { entity: {} },
  },
  {
    name: "",
    type: "grid",
    column_min_width: "200px",
    schema: [
      {
        name: "state_of_charge_unit",
        label: "Unit",
        selector: { text: {} },
      },
      {
        name: "state_of_charge_unit_white_space",
        label: "Unit White Space",
        selector: { boolean: {} },
      },
      {
        name: "state_of_charge_decimals",
        label: "Decimals",
        selector: { number: { mode: "box", min: 0, max: 4, step: 1 } },
      },
      {
        name: "color_state_of_charge_value",
        label: "Color of Value",
        selector: {
          select: {
            options: [
              { value: false, label: "Do Not Color" },
              { value: true, label: "Color dynamically" },
              { value: "consumption", label: "Consumption" },
              { value: "production", label: "Production" },
            ],
            custom_value: true,
          },
        },
      },
    ],
  },
];

export const batterySchema = [
  getEntityCombinedSelectionSchema("battery"),
  getEntitySeparatedSelectionSchema("battery"),
  {
    title: "State of Charge",
    name: "",
    type: "expandable",
    schema: stateOfChargeSchema,
  },
  mainSchema,
  customColorsSchema,
] as const;
