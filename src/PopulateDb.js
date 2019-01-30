const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://danielkar1:12345678@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/danielkar1_db')

class PopulateDb  {
constructor(){
    this.UserSocialCounter= this.GetTableSize
}
    insertNewUserToDb(password,name){
    sequelize
    .query(`INSERT INTO User VALUES(null,${password},${name})`)
    .then(function (result) {
        console.log(result)
        this.insertTokenToDb
    })
    }

    insertTokensToDb(accessToken,accessTokenSecret,TwitterId){
        console.log(accessToken)
    sequelize
    .query(`INSERT INTO Twitter VALUES(null,${TwitterId},'${accessToken}','${accessTokenSecret}')`)
    .then(function (result) {
        console.log("you got here")
        console.log(result)
    })
    }

    insetIntoUserNetworkTable(){
    sequelize
    .query(`INSERT INTO User_SocialNetwork VALUES(${this.UserSocialCounter},${this.UserSocialCounter})`)
    .then(function (result) {
        console.log(result)
        this.UserSocialCounter++
    })
    }

     GetExcsitingClientAccessTokens(userId,SocielNetworkType){
     sequelize
    .query(`SELECT accessToken,accessTokenSecret FROM User_SocialNetwork,User,${SocielNetworkType} WHERE User_SocialNetwork.User_id=${userId}`)
    .then(function (result) {
        results = JSON.parse(JSON.stringify(result[0]))
         this.accessToken =results[0].accessToken
        this.accessTokenSecret=results[0].accessTokenSecret
        console.log(accessTokenSecret)
    })

}
      getUserId(password,name){
        sequelize
        .query(`SELECT User_id FROM  User WHERE
            User.password= ${password} AND
            User.name= ${name}`)
        .then(function(result){
            result = JSON.parse(JSON.stringify(result[0]))
            console.log(result)
            this.userId=result
            this.GetAccessTokens(result)
        })
    }
     GetTableSize(){
         sequelize
         .query(`SELECT COUNT(User_id)
         FROM User`)
             .then(function(result){
                 this.UserSocialCounter= result
             })
     }   
     CheckIfExsict(name){
         console.log(name)
         sequelize
         .query(`SELECT COUNT(name) FROM User WHERE name = '${name}'`)
         .then(function(result){
             return result
             
         })
     }
    }

const sqlOperations=new PopulateDb()
    
module.exports = sqlOperations

