// pages/grades/grades.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: false,
    borderColor:'#eeeeee',
    grades: [
      {
        examTitle: '前端基础',
        ordinary: 92,
        middle: 5,
        final: 100,
        total: 100
      },
      {
        examTitle: '毛泽东思想和特色社会主义道路',
        ordinary: 92,
        middle: 90,
        final: 100,
        total: 98
      },
      {
        examTitle: 'java面向对象程序设计',
        ordinary: 92,
        middle: 90,
        final: 100,
        total: 90
      },
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    var gradeLength = this.data.grades.length;
    if (gradeLength > 0) {
      that.setData({
        isEmpty: false,   //成绩查询结果为零则改变前端布局为无记录，反之则显示查询结果
      })
    } else {
      that.setData({
        isEmpty: true,
      })
    }
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