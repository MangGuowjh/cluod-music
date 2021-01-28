// pages/music/music.js
const MAX_LIMIT=15
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[{
      url:'http://p1.music.126.net/pOXTFta-mhTpZOGhBBWvhQ==/109951165664682857.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/zUv2mRobckK7Tdn2bp9iSA==/109951165664840470.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/vAjwukVm-H0LOqzy4FTJXA==/109951165664851877.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
    }],
    playlist:[//{
      //"id":"1001",
      //"playCount":"11万",
      //"name":"随情节流淌|富有叙事感的柔软音乐片段",
      //"picUrl":"http://p2.music.126.net/1hzImIzOsRzG0iBSvHOO7w==/109951165511341127.jpg?param=140y140"
   // },
    //{
     // "id":"1002",
      //"playCount":"495万",
      //"name":"我试着把孤独藏进耳机",
      //"picUrl":"http://p2.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg?param=140y140"
   // },
    //{
     // "id":"1003",
      //"playCount":"239万",
      //"name":"【翻/原】温柔不是我说 而是你觉得.",
     // "picUrl":"http://p2.music.126.net/PJylNWy_2-jI7LRgQ2Cm6w==/109951165649129522.jpg?param=140y140"
    //},
   // {
     // "id":"1004",
     // "playCount":"51万",
     // "name":"2021·心里装着鲜花银河星光和我爱的人",
      //"picUrl":"http://p2.music.126.net/O8LkkfC7PtV7TA4UP693XA==/109951164569667332.jpg?param=140y140"
   // },
   // {
     // "id":"1005",
      //"playCount":"1093万",
      //"name":"你是北来的狂风 瞬间席卷我整个领空",
      //"picUrl":"http://p4.music.126.net/Hcf_U-bipM4nl8AQbWsqvQ==/19031446765754182.jpg?param=140y140"
    //},
    //{
      //"id":"1006",
      //"playCount":"317万",
      //"name":"你是我拿时间和新欢都忘不掉的人",
      //"picUrl":"http://p3.music.126.net/c9YpnWX9yJxkjXAmmSq03A==/109951163801485700.jpg?param=140y140"
   // }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlayList()
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
  this.setData({
    playlist:[]
  })
  this._getPlayList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getPlayList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  _getPlayList(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name:'music',
      data:{
        start:this.data.playlist.length,
        count:MAX_LIMIT,
        $url:'playlist',
      }
    }).then((res)=>{
      console.log(res)
      this.setData({
        playlist:this.data.playlist.concat(res.result.data)
      })
      wx.stopPullDownRefresh()
      wx.hideLoading()
    })
  }
})