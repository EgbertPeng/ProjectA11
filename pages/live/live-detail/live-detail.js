import { DBPost } from '../../../db/DBPost.js';
var app = getApp();
console.log(app)

function getRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = (Math.floor(Math.random() * 256)).toString(16);
    color = color.length == 1 ? ('0' + color) : color;
    rgb.push(color)
  }
  return "#" + rgb.join("");
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext("myvideo");
    console.log(this.videoContext);
    wx.setNavigationBarTitle({
      title: this.postData.liveName
    })
  },


  onLoad: function (options) {
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post: this.postData
    })
  },


  // 发送弹幕
  sendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.data.danmu,
      color: getRandomColor()
    })
  },


  getInput: function (e) {
    console.log(e.detail.value)
    this.setData({
      danmu: e.detail.value
    });
  },
})