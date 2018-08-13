// ImageView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    editing:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    choose:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    viewImage:function(){
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [this.properties.url]
      })
    },
    chooseImage:function(){
      this.setData({
        choose:!this.data.choose
      })
      console.log('choose')
    },
    ImageClick:function(){
      if(this.properties.editing){
        this.chooseImage()
      }else{
        this.viewImage()
      }
    }
  }
})
