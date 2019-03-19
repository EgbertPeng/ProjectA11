// pages/live/trailer/trailer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight:0,
    currentTab: 0,
    swipers:[
      '今天',
      '明天',
      '2月2日',
      '2月3日',
      '2月4日',
      '2月5日',
      '2月6日'
    ],
    trailer: [
      {
        liveImg: '/images/class/01.png',
        liveName: '前端基础',
        teacher: ' egbert',
        watchingNum: 23
      },

      {
        liveImg: '/images/class/02.png',
        liveName: 'Android零基础入门',
        teacher: ' egbert',
        watchingNum: 23
      },

      {
        liveImg: '/images/class/03.png',
        liveName: 'Java零基础入门',
        teacher: ' egbert',
        watchingNum: 923
      },

      {
        liveImg: '/images/class/04.png',
        liveName: 'Python入门基础',
        teacher: ' egbert',
        watchingNum: 923
      },
      {
        liveImg: '/images/class/04.png',
        liveName: 'java',
        teacher: ' egbert',
        watchingNum: 923
      },

      {
        liveImg: '/images/class/04.png',
        liveName: 'Google',
        teacher: ' egbert',
        watchingNum: 923
      }
    ],
  },


  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

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
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenWidth)//手机屏幕宽度
        console.log(res.screenHeight)//手机屏幕高度
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight - 44    //44为tabbar高度
        });
      },

    });
  },

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