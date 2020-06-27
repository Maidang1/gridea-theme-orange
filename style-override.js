const generateOverride = (params = {}) => {
  let result = '';
  /**
   * Write your custom css in here, doc: https://gridea.dev
   */

  // if (params.skin && params.skin !== 'white') {
  //   result += `
  //   body {
  //     color: #dee2e6;
  //   }
  //   a, .link {
  //     color: #e9ecef;
  //   }
  // `;
  // }

  // // 内容区最大宽度 - contentMaxWidth
  // if (params.contentMaxWidth && params.contentMaxWidth !== '800px') {
  //   result += `
  //   .main {
  //     max-width: ${params.contentMaxWidth};
  //   }
  // `;
  // }

  // // 正文内容文字大小 - textSize
  // if (params.textSize && params.textSize !== '16px') {
  //   result += `
  //   .post-detail .post .post-content p {
  //     font-size: ${params.textSize};
  //   }
  // `;
  // }

  // // 网页背景色 - pageBgColor
  // if (params.pageBgColor && params.pageBgColor !== '#ffffff') {
  //   result += `
  //   body {
  //     background: ${params.pageBgColor};
  //   }
  // `;
  // }

  // // 文字颜色 - textColor
  // if (params.textColor && params.textColor !== '#333333') {
  //   result += `
  //   body {
  //     color: ${params.textColor};
  //   }
  // `;
  // }

  // // 自定义 CSS - customCss
  // if (params.customCss) {
  //   result += `
  //   ${params.customCss}
  // `;
  // }

  return result;
};

module.exports = generateOverride;
