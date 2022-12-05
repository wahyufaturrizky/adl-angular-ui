import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { ButtonRaisedComponent } from "projects/ng-ui/src/lib/button-raised/button-raised.component";
import { ButtonComponent } from "../projects/ng-ui/src/lib/button/button.component";

export default {
  title: "ADL ANGULAR MATERIAL/Buttons",
  component: ButtonComponent,
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

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

const TemplateButtonRaisedComponent: Story<ButtonRaisedComponent> = (
  args: ButtonRaisedComponent
) => ({
  component: ButtonRaisedComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
  disabled: false,
  color: "primary",
};

export const Raised = TemplateButtonRaisedComponent.bind({});
Raised.args = {
  label: "Button",
  disabled: false,
  color: "primary",
};
