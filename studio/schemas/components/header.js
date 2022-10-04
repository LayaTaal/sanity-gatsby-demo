// The schema of the Header object-type
export default {
  name: 'header',
  type: 'object',
  title: 'Header',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'description', type: 'text', title: 'Description'}
  ]
}
