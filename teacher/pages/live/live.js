// pages/live/live.js
import { DBPost } from '../../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    living: [],
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

  tab2live:function(){
    wx.navigateTo({
     url: '../live/live-post/live-post',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success: function() { } ,       //成功后的回调；
           fail:function() { }  ,        //失败后的回调；
           complete:function() { }      //结束后的回调(成功，失败都会执行)
 })
  },


  moreDetail: function (e) {
    var mode = e.target.dataset.mode;
    console.log(mode);
    switch (mode) {
      case 0: wx.navigateTo({
        url: 'living/living',
      }); break;
      case 1: wx.navigateTo({
        url: 'trailer/trailer',
      }); break;
      case 2: wx.navigateTo({
        url: 'review/review',
      }); break;
      default: break;
    }
  },

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
        currentTab: e.target.dataset.current,
        toview: 'target' + e.target.dataset.current
      })
    }
  },
  /**直播点击进入入直播页函数 */
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'live-detail/live-detail?id=' + postId,
    })
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
          winHeight: res.windowHeight - 80  //44为tabbar高度
        });
      },
    });
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