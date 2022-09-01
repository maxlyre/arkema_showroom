// path: ./config/plugins.js

module.exports = () => ({
    //
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 1000,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    ckeditor: {
      enabled: true,
      config:{
        plugin:{
          // strapiTheme:false,
          styles:`
            .ck.ck-editor__main>.ck-editor__editable {
              background: #ededf3 !important;
            }
          `
        },
        editor:{
          toolbar:{
            items: [
              'paragraph',
              'heading2',
              'heading4',
              'fontSize',
              '|',
              'bold',
              'italic',
              'underline',
              'superscript',
              'alignment',
              'specialCharacters',
              'removeFormat',
              '|',
              'bulletedList',
              'numberedList',
              '|',
              'StrapiMediaLib',
              'insertTable',
              'link',
              '|',
              'sourceEditing',
            ]
          },
          fontSize: {
            options: [
              { model: 'tiny', title: 'Tiny', class: 'text-tiny' },
              { model: 'small', title: 'Small', class: 'text-small' },
              'default',
              { model: 'big', title: 'Big', class: 'text-big' },
              { model: 'huge', title: 'Huge', class: 'text-huge' },
            ],
            supportAllValues: false
          },
          image:{
            resizeUnit: 'px',
          }
        }
      }
    },
  });
   