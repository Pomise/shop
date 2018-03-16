var app = getApp();
Page({
    data: {
        topiclist: []
    },
    
    onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Zhuti/index',
      method:'get',
      data: {},
      header: {
        'Content-Type':  'application/x-www-form-urlencoded'
      },
      success: function (res) {  
        var topiclist = res.data.topiclist;
        that.setData({
          topiclist: res.data.topiclist,
        });
      },
      fail:function(e){
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })

  },
  onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
  onShareAppMessage: function () {
    return {
      title: '网易严选',
	  desc: '网易严选主题',
      path: '/pages/topic/topic',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }
})