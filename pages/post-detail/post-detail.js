// pages/post-detail/post-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/images/teacher/tea1.png',
    nickName: 'Egbert',
    date:'01/20',
    postContent: '为什么体育课破坏我队形',
    collectionNum: 56,
    commentNum: 3,
    shareNum: 5,
    postImages: [
      '/images/community/img-8.png',
    ],

    comments:[{
       userImg:'/images/teacher/tea1.png',
        nickName:'Tom',
        date:"01/22",
        content:'太帅了吧'
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
        content: '太爽了吧'
      }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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