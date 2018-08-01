// pages/index/index.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    item1:0,
    item2:0,
=======
  
>>>>>>> 889c759ee248b69347109157fc4494fa7f918e63
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
  
<<<<<<< HEAD
  },

  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: app.globalData.url +'/api/Calc/WordsIncrement',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          item1: res.data.value.current.item1,
          item2: res.data.value.current.item2,
        });
      }
    })
  },
  formReset: function () {

  }

=======
  }
>>>>>>> 889c759ee248b69347109157fc4494fa7f918e63
})