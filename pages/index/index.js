//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    editing:false,
    fileList:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  takePhoto: function() {
    var that=this;
    wx.chooseImage({
      sourceType:['camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath
            wx.getSavedFileList({
              success: function (res) {
                that.setData({
                  fileList: res.fileList
                })
                console.log(res.fileList)
              }
            })
          }
        })
      }
    })    
  },
  // previewImage:function(){
  //   wx.previewImage({
  //     current: '', // 当前显示图片的http链接
  //     urls: this.data.fileList.map(file => file.filePath) // 需要预览的图片http链接列表
  //   })
  // },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  modeSwitch:function(){
    this.setData({
      editing:!this.data.editing
    })
  },
  onShow: function () {
    var that = this;
    wx.getSavedFileList({
      success: function (res) {
        that.setData({
          fileList:res.fileList
        });        
        console.log(res.fileList)
      }
    })
  },
})
