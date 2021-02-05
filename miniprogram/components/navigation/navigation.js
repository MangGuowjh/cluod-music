// components/navigation/navigation.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showIcon: {
      type: Boolean,
      value: true
    },
    isTransparent: {
      type: Boolean,
      value: false
    },
    backgroundColor: {
      type: String,
      value: "#24AFFF"
    },
    contentOffset: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack: function(){
      console.log("后退")
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
