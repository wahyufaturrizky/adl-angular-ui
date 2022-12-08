import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { BadgeTextComponent } from "projects/pattern-lib/src/lib/badge-text/badge-text.component";
import { MatBadgeModule } from "@angular/material/badge";

export default {
  title: "ADL ANGULAR MATERIAL/Badges",
  component: BadgeTextComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    position: {
      options: [
        "above after",
        "above before",
        "below before",
        "below after",
        "before",
        "after",
        "above",
        "below",
      ],
      control: { type: "radio" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatBadgeModule],
    }),
  ],
} as Meta;

const Template: Story<BadgeTextComponent> = (args: BadgeTextComponent) => ({
  component: BadgeTextComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  label: "Text goes here",
  color: "primary",
  matBadge: 5,
  description: "Description goes here",
  hidden: false,
  overlap: false,
  position: "above after",
  size: "medium",
};
