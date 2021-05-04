/* eslint-disable
   @typescript-eslint/no-var-requires
*/
module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
