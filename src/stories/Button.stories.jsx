import Button from '../components/Button'

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: 'handleClick'}}
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: 'Hello World',
    size: 'md'
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: 'Green Button',
    size: 'md'
}


export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: 'Red Button',
    size: 'sm'
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: 'red',
    label: 'Red Button',
    size: 'lg'
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor: 'red',
    label: 'Red Button  sdfsdafasd;fjsa;dfjsd;jfsadkjf;jsaf;jsa;fjsd;j',
    size: 'md'
}

