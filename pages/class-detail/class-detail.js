// pages/class-detail/class-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面配置 
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    videoUrl: 'https://vodkgeyttp9.vod.126.net/cloudmusic/UIAMSz4B_2360215489_shd.mp4?wsSecret=3fcd9fbf18d81120c400963d4dde4a7f&wsTime=1552133128&ext=p9Sx1TzBS7x0EVwREjT7fRh3M0XYpws0Yu3LOYzNVWRLv1TpLzoAIn6CvvlH2ijwuTSjPKeLvuUucO9mpdM99nIInkZUQCilhIL6EolBOoZORtwQTH44jGceiV7nNFOO9twO9KluwZjft44RPCj7NnESMIJYoRHQ7cP8sBL%2B7CX8Jltbdkotnps8xQCUWLkI5c3ujqs1cUURpfiCzT%2BMtQ%2FVfM23wYloNGDYL9fwTmnJgyYMZgHyE6xJt2mSOcbMseKqp%2BNtniFZ0OFXdWLFaGDgxDDQQGC1a9JSLbFqFxZDkFonUwhE07bPqMDfR6JFcOhWG0Z7M%2FUxXUiiNCqHQP2AFf1dbmhgoAhPiNgG%2FDGtlUtppICSHDTqYS4Th0DKSYwILDMqAxjQWLDcb7glTFl7g22gF8%2FbIjMfZGTk4tuEwvqTDScv1c0FPE8rwtFonV0ro6LMLCxM3LKLev%2Fq6mvbDaJfWMqSIE9NRgbynGuVm%2Faiiu6GnqsEG%2BkVzIKg7YSQQJ4YRtu3EieFsyW9DRP9h463MmGNdSvMK0bUqsk%3D',
    className:'阿丽塔:战斗天使',
    classNum:21,
    classLearned:132,
    tabList:[
      '影视·预告',
      '阿丽塔：战斗天使',
      '电影'
    ],

    classImgs:[
      'https://p2.music.126.net/CSqBWfjp3k6xNgsdFSQtBQ==/109951163918662216.gif?param=9999y9999',
      'https://p2.music.126.net/NyZ8JJpH_iksnH0Z16UICQ==/109951163918666617.gif',
       'https://p2.music.126.net/PusdfFGjQpm07T48bz0rfQ==/109951163918667124.gif',
       'https://p2.music.126.net/ME7NJ-YECWhWwDRAAAfyGw==/109951163918666096.gif'
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
    wx.setNavigationBarTitle({
      title: this.data.className
    });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenWidth)//手机屏幕宽度
        console.log(res.screenHeight)//手机屏幕高度
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight-40  //44为tabbar高度
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