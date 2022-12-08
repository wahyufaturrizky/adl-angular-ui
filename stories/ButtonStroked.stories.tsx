import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonStrokedComponent } from "projects/pattern-lib/src/lib/button-stroked/button-stroked.component";

export default {
  title: "ADL ANGULAR MATERIAL/Buttons",
  component: ButtonStrokedComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonStrokedComponent> = (
  args: ButtonStrokedComponent
) => ({
  component: ButtonStrokedComponent,
  props: args,
});

export const Stroked = Template.bind({});
Stroked.args = {
  label: "Button",
  disabled: false,
  color: "primary",
};
