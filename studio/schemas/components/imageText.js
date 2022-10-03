// The schema of the Image + Text object-type
export default {
  name: 'imageText',
  type: 'object',
  title: 'Image + Text',
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
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'description'
    }
  }
}
