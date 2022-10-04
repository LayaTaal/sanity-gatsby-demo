// The schema of the Two Column List object-type
export default {
  name: 'twoColumnList',
  type: 'object',
  title: 'Two Column List',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'CTA Button',
      name: 'cta',
      type: 'url'
    },
    {
      title: 'List Items',
      name: 'listItems',
      type: 'array',
      of: [{
        type: 'header'
      }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'description'
    }
  }
}
