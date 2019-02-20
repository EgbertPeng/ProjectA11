
// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/images/teacher/tea1.png',
    nickName: 'Egbert',
    followNum: 8,
    followedNum: 25,
    posts:[{
      avatarUrl: '/images/teacher/tea1.png',
      postContent: '为什么体育课破坏我队形',
      collectionNum: 56,
      commentNum: 3,
      shareNum: 5,
      postImages: [
        '/images/community/img-8.png',
      ]
    },
    {
      avatarUrl: '/images/teacher/tea1.png',
      postContent: '',
      collectionNum: 56,
      commentNum: 3,
      shareNum: 5,
      postImages: [
        '/images/community/img-1.png',
        '/images/community/img-2.png',
        '/images/community/img-3.png',
        '/images/community/img-4.png',
        '/images/community/img-5.png',
        '/images/community/img-6.png'
      ]
    },
    {
      avatarUrl: '/images/teacher/tea1.png',
      postContent: '为什么体育课破坏我队形',
      collectionNum: 30,
      commentNum: 4,
      shareNum: 8,
      postImages: [
        '/images/community/img-1.png',
        '/images/community/img-2.png',
        '/images/community/img-3.png'
      ]
    }
    ],
      
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