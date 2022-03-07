const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // "@primary-color": "#f74a49", //自定义修改class 有primary的样式
        // "@border-radius-base": ".5em"
      }
    }
  }
});