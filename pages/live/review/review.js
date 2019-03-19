import { DBPost } from '../../../db/DBPost.js';// pages/live/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    review: [
      {
        classImg: '/images/class/01.png',
        className: '前端基础',
        teacher: ' egbert',
        watchingNum: 93
      },

      {
        classImg: '/images/class/02.png',
        className: 'Android零基础入门',
        teacher: ' egbert',
        watchingNum: 93
      },

      {
        classImg: '/images/class/03.png',
        className: 'Java零基础入门',
        teacher: ' egbert',
        watchingNum: 923
      },

      {
        classImg: '/images/class/04.png',
        className: 'Python入门基础哈哈哈哈哈',
        teacher: ' egbert',
        watchingNum: 923
      },
      {
        classImg: '/images/class/04.png',
        className: 'java',
        teacher: ' egbert',
        watchingNum: 923
      },

      {
        classImg: '/images/class/04.png',
        className: 'Google',
        teacher: ' egbert',
        watchingNum: 923
      }


    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbPost = new DBPost();
    this.setData({
      living: dbPost.getAllPostData()
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