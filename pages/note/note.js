// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty:false,
    notes: [
      {
        noteTitle: '作业',
        noteInfo: '前端基础名片一张',
        noteDate: '4小时前'
      },
      {
        noteTitle: '作业',
        noteInfo: '前端基础名片一张',
        noteDate: '4小时前'
      },
      {
        noteTitle: '作业',
        noteInfo: '前端基础名片一张',
        noteDate: '2018/12/11'
      },
      {
        noteTitle: '作业',
        noteInfo: '前端基础名片一张',
        noteDate: '4小时前'
      },
    ],
  },


  gotoEdit(event){
    wx.navigateTo({
      url: '../note/edit/edit',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
        var noteLength = this.data.notes.length;
        if(noteLength>0){
          that.setData({
              isEmpty: false,
          })
        }else{
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