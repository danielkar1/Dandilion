const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://danielkar1:12345678@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/danielkar1_db')




class SqlDb extends  Component {
  constructor(){
  super()
  this.accessToken=""
  this.accessTokenSecret=""
  }
    insertUserToDb=()=>{
sequelize
    .query(`INSERT INTO User VALUES(null,12345,'Mozart')`)
    .then(function (result) {
        console.log(result)
    })
    }

    insertTokenToDb=()=>{
    sequelize
    .query(`INSERT INTO Twitter VALUES(null,'1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg','DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb')`)
    .then(function (result) {
        console.log(result)
    })
    }

    insetIntoUserNetworkTable=()=>{
    sequelize
    .query(`INSERT INTO User_SocialNetwork VALUES(1,1)`)
    .then(function (result) {
        console.log(result)
    })
    }
}
const GetAccessTokens= (userId,SocielNetworkType)=>{
     sequelize
    .query(`SELECT accessToken,accessTokenSecret FROM User_SocialNetwork,User,${SocielNetworkType} WHERE User_SocialNetwork.User_id=${userId}`)
    .then(function (result) {
        results = JSON.parse(JSON.stringify(result[0]))
        let accessToken=results[0].accessToken
        let accessTokenSecret=results[0].accessTokenSecret
        console.log(accessTokenSecret)
    })
}
const userId=1
const SocielNetworkType= 'Twitter'
GetAccessTokens(userId,SocielNetworkType)
    

export default SqlDb
