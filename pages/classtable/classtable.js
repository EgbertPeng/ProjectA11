// pages/classtable/classtable.js
var app = getApp()
Page({
  data: {
    cardstatu:false,
    colorArrays: ["#ABE3FF", "#FFB4B4", "#D9FFDE", "#D2CFFF", "#F6DCFF", "#D9FFDE"],
    week:"第十四周",
    term:"大二 第二学期",
    wlist: [
      { "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "角色形象设计", "cp":"第6教研楼北312" },
      { "xqj": 1, "skjc": 6, "skcd": 3, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 3, "skjc": 4, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 3, "skjc": 8, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 3, "skjc": 6, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学", "cp":"第6教研楼北312" },

      { "xqj": 7, "skjc": 6, "skcd": 3, "kcmc": "高等数学", "cp":"第6教研楼北312" },





    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showCardView(event){
    var classId = event.currentTarget.dataset.index;
    var classTitle = this.data.wlist[classId].kcmc;
    var classPc = this.data.wlist[classId].cp;
    var class1 = this.data.wlist[classId].skjc;
    var class2 = this.data.wlist[classId].skjc + this.data.wlist[classId].skcd-1;
    switch (this.data.wlist[classId].xqj){
      case 1: var day='周一';break;
      case 2: var day = '周二'; break;
      case 3: var day = '周三'; break;
      case 4: var day = '周四'; break;
      case 5: var day = '周五'; break;
      case 6: var day = '周六'; break;
      case 7: var day = '周日'; break;
    }

    var classDate = day+class1+'-'+class2+'节';
    this.setData({
      cardstatu:true,
      classinfo:{ classTitle ,classPc ,classDate}
    })
  },

  cancel(event){
    this.setData({
      cardstatu: false,
    })
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