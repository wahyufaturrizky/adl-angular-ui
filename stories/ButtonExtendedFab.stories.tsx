import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { ButtonExtendedFabComponent } from "projects/pattern-lib/src/lib/button-extended-fab/button-extended-fab.component";

export default {
  title: "ADL ANGULAR MATERIAL/Buttons",
  component: ButtonExtendedFabComponent,
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
      imports: [MatButtonModule, MatTooltipModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonExtendedFabComponent> = (
  args: ButtonExtendedFabComponent
) => ({
  component: ButtonExtendedFabComponent,
  props: args,
});

export const ExtendedFab = Template.bind({});
ExtendedFab.args = {
  iconName: "favorite",
  disabled: false,
  color: "primary",
  ariaLabel: "Example icon-button",
  matTooltip: "Tooltip text goes here",
  label: "Text goes here",
};
