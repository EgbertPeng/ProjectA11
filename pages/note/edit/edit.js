// pages/note/edit/edit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面配置 
      winWidth: 0,
      winHeight: 0,
      colorStatu:"#999999"
  },

  changeInput(event){
    let that = this;
    var inputLength = event.detail.value.length;
    if(inputLength>0){
        that.setData({
          colorStatu: "#1D5FFF"
         })
    }
    else{
      that.setData({
        colorStatu: "#999999"
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
          winHeight: res.windowHeight   
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