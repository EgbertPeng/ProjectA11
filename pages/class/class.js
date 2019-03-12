// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面配置 
    winWidth: 0,
    winHeight: 0,
    commentHeigh:0,
    currentTab: 0,
    videoUrl: 'https://vodkgeyttp9.vod.126.net/cloudmusic/UIAMSz4B_2360215489_shd.mp4?wsSecret=3fcd9fbf18d81120c400963d4dde4a7f&wsTime=1552133128&ext=p9Sx1TzBS7x0EVwREjT7fRh3M0XYpws0Yu3LOYzNVWRLv1TpLzoAIn6CvvlH2ijwuTSjPKeLvuUucO9mpdM99nIInkZUQCilhIL6EolBOoZORtwQTH44jGceiV7nNFOO9twO9KluwZjft44RPCj7NnESMIJYoRHQ7cP8sBL%2B7CX8Jltbdkotnps8xQCUWLkI5c3ujqs1cUURpfiCzT%2BMtQ%2FVfM23wYloNGDYL9fwTmnJgyYMZgHyE6xJt2mSOcbMseKqp%2BNtniFZ0OFXdWLFaGDgxDDQQGC1a9JSLbFqFxZDkFonUwhE07bPqMDfR6JFcOhWG0Z7M%2FUxXUiiNCqHQP2AFf1dbmhgoAhPiNgG%2FDGtlUtppICSHDTqYS4Th0DKSYwILDMqAxjQWLDcb7glTFl7g22gF8%2FbIjMfZGTk4tuEwvqTDScv1c0FPE8rwtFonV0ro6LMLCxM3LKLev%2Fq6mvbDaJfWMqSIE9NRgbynGuVm%2Faiiu6GnqsEG%2BkVzIKg7YSQQJ4YRtu3EieFsyW9DRP9h463MmGNdSvMK0bUqsk%3D',


    sections:[
       {
        secTitle:'第一章 课程介绍',
        items:[
            '1-1课程介绍（导学）',
            '前言',
            'HTML基础',
            'HTML表单',
            '项目：搭建网页结构'
        ]
      },
      {
        secTitle: '第二章 CSS基础',
        items: [
          '2-1课程介绍（导学）',
          '前言',
          'HTML基础',
          'HTML表单',
          '项目：搭建网页结构'
          ]
      },
      {
        secTitle: '第三章 JS基础',
        items: [
          '3-1课程介绍（导学）',
          '前言',
          'HTML基础',
          'HTML表单',
          '项目：搭建网页结构'
        ]
      }
    ],


    comments: [{
      userImg: '/images/teacher/tea1.png',
      nickName: 'Tom',
      date: "01/22",
      content: '这个太帅了吧'
    },
    {
      userImg: '/images/teacher/tea2.png',
      nickName: 'Jason',
      date: "01/22",
      content: '太酷了吧'
    },
    {
      userImg: '/images/teacher/tea3.png',
      nickName: 'Tommy',
      date: "01/22",
      content: '这个也太爽了吧'
    },
      {
        userImg: '/images/teacher/tea3.png',
        nickName: 'Tommy',
        date: "01/22",
        content: '这个也太爽了吧'
      },
      {
        userImg: '/images/teacher/tea3.png',
        nickName: 'Tommy',
        date: "01/22",
        content: '这个也太爽了吧'
      }
    ]
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
          winHeight: res.windowHeight - 251,  //44为tabbar高度
          commentHeight:res.windowHeight-301
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