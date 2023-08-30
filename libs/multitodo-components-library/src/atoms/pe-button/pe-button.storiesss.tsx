// import { moduleMetadata, Story, Meta } from '@storybook/angular';
// import { PeButtonComponent } from './pe-button.component';

// export default {
//     title: 'PeButtonComponent',
//     component: PeButtonComponent,
//     decorators: [
//         moduleMetadata({
//             imports: [],
//         }),
//     ],
// } as Meta<PeButtonComponent>

// const Template: Story<PeButtonComponent> = (args: PeButtonComponent) => ({
//     template: '<multitodo-library-pe-button></multitodo-library-pe-button>',
//     props: args,
// })

// export const Basic = Template.bind({});
// Basic.args = {
//     loading: true,
//     label: 'POLLA'
// }

import { Meta } from '@storybook/angular';
import { PeButtonComponent } from './pe-button.component';

export default {
  title: 'MyButtonComponent',
  component: PeButtonComponent,
} as Meta<PeButtonComponent>;

export const Primary = {
  render: (args: PeButtonComponent) => ({
    props: args,
  }),
  args: {
    loading: false,
    
    disabled: true,
  },
};
