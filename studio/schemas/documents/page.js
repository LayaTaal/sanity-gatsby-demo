export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your page for search engines and social media.'
    },
    {
      name: 'components',
      type: 'array',
      title: 'Components',
      description: 'Add components to your page',
      of: [{type: 'imageText'}, {type: 'twoColumnList'}],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
