import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ProgressBarComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export default {
  title: 'Angular Material/Progressbar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    mode: {
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const BasicProgressBar = Template.bind({});
BasicProgressBar.args = {
  mode: 'determinate',
  value: 35,
  bufferValue: 65,
  color: 'warn', // primary | accent | warn
};
