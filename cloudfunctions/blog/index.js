// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const TcbRouter = require('tcb-router')
const db = cloud.database()
const blogCollection = da.collection('blog')

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })
  app.router('list',async(ctx, next) =>{
    let blogList = await blogCollection.skip(event.start).limit(event.count).orderBy('createTime', 'desc').get().then((res) =>{
      return res.data
    })
    ctx.body = blogList
  })
  return app.serve()
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}