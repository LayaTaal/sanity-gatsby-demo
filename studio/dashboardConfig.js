export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633aeb91eeb79f194acfa0ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-demo-studio-q3e5k77o',
                  apiId: '36666ddd-2b2d-4ad9-a2f3-451f63810c86'
                },
                {
                  buildHookId: '633aeb92e70326069f6d2bf9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-demo-web-d1syiv4q',
                  apiId: 'f3843490-4e2e-481a-96da-2d24191a014b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LayaTaal/sanity-gatsby-demo',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-demo-web-d1syiv4q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
