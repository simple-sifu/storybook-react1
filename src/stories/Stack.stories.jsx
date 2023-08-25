import Stack from '../components/Stack'

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: { 
        numberOfChildren: { type: 'number' }
    }
}

const Template = ({ numberOfChildren, ...args }) => (
<Stack {...args} >
  {[...Array(numberOfChildren).keys()].map(n => (
    <div 
        style={{ 
            width: "50px", 
            height: "50px", 
            backgroundColor:"red", 
            display: "flex", 
            justifyContent: 'center',
            alignItems:'center' 
        }}
    >
     { n + 1 }
    </div>
   ))}
</Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false,
    numberOfChildren: 4
}

export const Vertical = Template.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false,
    numberOfChildren: 4
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false,
    numberOfChildren: 4
}

export const WrapOverFlow = Template.bind({})
WrapOverFlow.args = {
    direction: "row",
    spacing: 2,
    wrap: true,
    numberOfChildren: 40
}

export const Empty = Template.bind({})
Empty.args = {
    direction: "row",
    spacing: 2,
    numberOfChildren: 0
}