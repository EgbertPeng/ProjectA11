// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minHeight:0,
      days:21,
      minutes:354,
      notTypes:[
        '老师发布了作业',
        '老师发布了通知',
        '老师上传了资料'
      ],
      notif:[],
      classlist:[
        {
          classTitle:"马克笔材质表达，不同材质适应产品",
          process:85,
          notType:0,//提醒通知类型
          not:'',
          test:true
        },
        {
          classTitle: "Android零基础入门",
          process: 85,
          notType: 1,//提醒通知类型
          not: '',
          test: false
        },
        {
          classTitle: "高大上的PPT设计秘笈",
          process: 85,
          notType: 2,//提醒通知类型
          not: '',
          test: true
        },
        {
          classTitle: "Java零基础入门",
          process: 85,
          notType: 0,//提醒通知类型
          not: '',
          test: true
        },
      ]
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var length = this.data.classlist.length;
    var nots = new Array()
      for( var i=0;i<this.data.classlist.length;i++){
        switch(this.data.classlist[i].notType){
          case 0:nots[i]=this.data.notTypes[0];break;
          case 1: nots[i] = this.data.notTypes[1]; break;
          case 2: nots[i] = this.data.notTypes[2]; break;
          default:break;
        }
        this.setData({
          notif:nots
        })
      }

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenWidth)//手机屏幕宽度
        console.log(res.screenHeight)//手机屏幕高度
        that.setData({
          minHeight: res.windowHeight - 155    //44为tabbar高度
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