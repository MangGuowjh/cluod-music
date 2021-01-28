// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'mgwjh-5gvru39y094a7900'
})
const db=cloud.database()
const playListCollection=db.collection('playlist')

// 云函数入口函数
exports.main = async (event, context) => {
  const res=await playListCollection.get()
  console.log('######' + res.data)
  return res.data
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}