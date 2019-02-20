// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classImgs:[
      {
        classImg: '/images/class/01.png',
        className: '前端基础',
        classNum:12,
        classLearned:923
        },

      {
        classImg:'/images/class/02.png',
        className: 'Android零基础入门',
        classNum: 52,
        classLearned: 23
        },

      { 
        classImg: '/images/class/03.png',
        className: 'Java零基础入门',
        classNum: 9,
        classLearned: 103
        },

      {
        classImg:'/images/class/04.png',
        className: 'Python入门基础',
        classNum: 32,
        classLearned: 523
        },
      {
        classImg: '/images/class/04.png',
        className: 'java',
        classNum: 32,
        classLearned: 523
      },

      {
        classImg: '/images/class/04.png',
        className: 'Google',
        classNum: 32,
        classLearned: 523
      }

     
    ],


    topClass: [
      {
        classImg: '/images/class/01.png',
        className: '前端基础',
        classRank: 1,
        classLearned: 923
      },

      {
        classImg: '/images/class/02.png',
        className: 'Android零基础入门',
        classRank: 2,
        classLearned: 23
      },

      {
        classImg: '/images/class/03.png',
        className: 'Java零基础入门',
        classRank: 3,
        classLearned: 103
      },

      {
        classImg: '/images/class/04.png',
        className: 'Python入门基础',
        classRank: 4,
        classLearned: 523
      },
      {
        classImg: '/images/class/04.png',
        className: 'java',
        classRank: 5,
        classLearned: 523
      }
    ],


    teaUrls: [
      {
        teaImg: '/images/teacher/tea1.png',
        teaName: 'Derrick',
        school: '南开大学',
        stuLearned: 923
      },

      {
        teaImg: '/images/teacher/tea2.png',
        teaName: '刘造时',
        school: '杭州电子科技大学',
        stuLearned: 923
      },

      {
        teaImg: '/images/teacher/tea3.png',
        teaName: '余克勤',
        school: '浙江大学',
        stuLearned: 923
      },

      {
        teaImg: '/images/teacher/tea4.png',
        teaName: '黄强辉',
        school: '南开大学',
        stuLearned: 923
      }
      
    ],



    searchicon:'/images/icon/wx_app_search.png',
    currentIndex: 0,

    imgUrls: [

      '/images/swiper/banner.png',

      '/images/swiper/banner.png',

      '/images/swiper/banner.png'

    ]

  },

  swiperChange: function (e) {

    this.setData({

      currentIndex: e.detail.current

    })

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