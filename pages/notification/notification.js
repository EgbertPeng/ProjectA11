var app = getApp();
Page({
  data: {
    //页面配置 
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    notifications:[
      {
        nfcHead:'/images/teacher/tea1.png',
        nfcUser:'Egbert',
        nfcInfo:'赞了你',
        nfcDate:'4小时前'
      },
      {
        nfcHead: '/images/teacher/tea2.png',
        nfcUser: 'Tom',
        nfcInfo: '回复了你666',
        nfcDate: '1/12'
      },
      {
        nfcHead: '/images/teacher/tea3.png',
        nfcUser: 'Jack',
        nfcInfo: '赞了你',
        nfcDate: '2018/12/11'
      },
      {
        nfcHead: '/images/teacher/tea4.png',
        nfcUser: 'John',
        nfcInfo: '赞了你',
        nfcDate: '2018/11/22'
      },
    ],

    articles: [
      {
        date: '01月12日',
        details: [
          {
            imgUrl: '/images/swiper/01.jpg',
            title: '星创百万读书会（线上微信群）分享《富爸...',
            info: '1月12日上午，中国共产党杭州电子科技大学第三次代表大会在选举产生新一届党委、纪委，通过关于党委工作报告的决议和关于对于...'
          },
          {
            imgUrl: '/images/swiper/02.jpg',
            title: '音乐节潮流穿搭公式',
            info: '进入四月，国内各大音乐节就近在眼前了。除了跟着音乐嗨翻全场，各路美女帅哥也纷纷祭出各自穿搭大招。跟日常搭配相比，音乐..'
          }
        ]
      },
      {
        date: '01月13日',
        details: [
          {
            imgUrl: '/images/swiper/03.jpg',
            title: '星创百万读书会（线上微信群）分享《富爸...',
            info: '1月12日上午，中国共产党杭州电子科技大学第三次代表大会在选举产生新一届党委、纪委，通过关于党委工作报告的决议和关于对于党组织来说'
          },
          {
            imgUrl: '/images/swiper/04.jpg',
            title: '音乐节潮流穿搭公式',
            info: '进入四月，国内各大音乐节就近在眼前了。除了跟着音乐嗨翻全场，各路美女帅哥也纷纷祭出各自穿搭大招。跟日常搭配相比，音乐..'
          }
        ]
      },
      {
        date: '01月14日',
        details: [
          {
            imgUrl: '/images/swiper/03.jpg',
            title: '星创百万读书会（线上微信群）分享《富爸...',
            info: '1月12日上午，中国共产党杭州电子科技大学第三次代表大会在选举产生新一届党委、纪委，通过关于党委工作报告的决议和关于对于党组织来说'
          },
          {
            imgUrl: '/images/swiper/04.jpg',
            title: '音乐节潮流穿搭公式',
            info: '进入四月，国内各大音乐节就近在眼前了。除了跟着音乐嗨翻全场，各路美女帅哥也纷纷祭出各自穿搭大招。跟日常搭配相比，音乐..'
          }
        ]
      }
    ]
  },
  
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenWidth)//手机屏幕宽度
        console.log(res.screenHeight)//手机屏幕高度
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight-44    //44为tabbar高度
        });
      },
   
    });
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  //点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})