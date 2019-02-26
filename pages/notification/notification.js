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
          winHeight: res.windowHeight
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