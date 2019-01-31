const CONSTS = require(`../CONSTS`)
const Sequelize = require('sequelize')
const Post=require('../server/modules/Scheme')
//put in your db in CONSTS file
const sequelize = new Sequelize(`mysql://${CONSTS.dbConfig.name}:${CONSTS.dbConfig.password}@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/${CONSTS.dbConfig.dbName}`)

class PopulateDb {
    constructor() {
        this.UserSocialCounter = this.GetTableSize
    }
    insertNewUserToDb(password, name) {
        sequelize
            .query(`INSERT INTO User VALUES(null,${password},${name})`)
            .then(function (result) {
                console.log(result)
                this.insertTokenToDb
            })
    }

    insertTokensToDb(accessToken, accessTokenSecret, TwitterId) {
        console.log(accessToken)
        sequelize
            .query(`INSERT INTO Twitter VALUES(null,${TwitterId},'${accessToken}','${accessTokenSecret}')`)
            .then(function (result) {
                console.log("you got here")
                console.log(result)
            })
    }

    insetIntoUserNetworkTable() {
        sequelize
            .query(`INSERT INTO User_SocialNetwork VALUES(${this.UserSocialCounter},${this.UserSocialCounter})`)
            .then(function (result) {
                console.log(result)
                this.UserSocialCounter++
            })
    }

    async GetExcsitingClientAccessTokens(userId, SocielNetworkType) {
        let result = await sequelize
            .query(`SELECT accessToken,accessTokenSecret FROM User_SocialNetwork,User,${SocielNetworkType} WHERE User_SocialNetwork.User_id=${userId}`)
            
                let results = JSON.parse(JSON.stringify(result[0]))
                let accessToken = results[0].accessToken
                let accessTokenSecret = results[0].accessTokenSecret
                console.log(accessToken)
                return { accessToken: accessToken, accessTokenSecret: accessTokenSecret }
            

    }
    getUserId(password, name) {
        sequelize
            .query(`SELECT id 
            FROM User 
            WHERE
                User.password='${password}' AND
                User.name='${name}'`
            )
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result[0]))
                console.log(result)
                console.log(`done getUserId`)
                this.userId = result
                this.GetAccessTokens(result)
            })
    }
    GetTableSize() {
        sequelize
            .query(`SELECT COUNT(User_id)
         FROM User`)
            .then(function (result) {
                this.UserSocialCounter = result
            })
    }
    CheckIfExsict(name) {
        console.log(name)
        sequelize
            .query(`SELECT COUNT(name) FROM User WHERE name = '${name}'`)
            .then(function (result) {
                return result

            })
    }
}

const sqlOperations = new PopulateDb()
sqlOperations.GetExcsitingClientAccessTokens("1","Twitter")


module.exports = sqlOperations


// testPost= new Post({
//     postId: 13579,
//     userIdkey: 1,
//     text: "Test",
//     socialNetwork: ["Twitter"]
// })

// testPost.save()