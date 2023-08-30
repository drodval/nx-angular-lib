import { Meta } from '@storybook/angular';
import { PeButtonComponent } from './pe-button.component';

export default {
    title: 'PeButtonComponent',
    component: PeButtonComponent,
} as Meta<PeButtonComponent>;

export const Primary = {
    render: (args: PeButtonComponent) => ({
        props: args,
    }),
    args: {
        loading: false,
        style: 'primary',
        styleClass: '',
        disabled: false,
        icon: '',
        label: '',
    },
};
