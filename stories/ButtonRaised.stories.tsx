import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonRaisedComponent } from "projects/pattern-lib/src/lib/button-raised/button-raised.component";

export default {
  title: "ADL ANGULAR MATERIAL/Buttons",
  component: ButtonRaisedComponent,
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

const Template: Story<ButtonRaisedComponent> = (
  args: ButtonRaisedComponent
) => ({
  component: ButtonRaisedComponent,
  props: args,
});

export const Raised = Template.bind({});
Raised.args = {
  label: "Button",
  disabled: false,
  color: "primary",
};
