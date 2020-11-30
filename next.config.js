const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')
module.exports = withLess({
  // [
  //   stylus,
  //   {
  //     cssModules: true,
  //     cssLoaderOptions: {
  //       importLoaders: 1,
  //       localIdentName
  //     },
  //     postcssLoaderOptions: {
  //       // parser: 'sugarss',
  //       config: {
  //         ctx: {
  //           theme: JSON.stringify(process.env.REACT_APP_THEME)
  //         }
  //       }
  //     }
  //   }
  // ]
})
// module.exports = {
//     useFileSystemPublicRoutes: true,
    

//   }
  