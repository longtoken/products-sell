export default {
  pages: [
    'pages/index/index',
    'pages/home/home'
  ],
  subpackages: [
    {
      "root": "pages",
      "pages": [
        "product/product"
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
