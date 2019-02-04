const CONSTS = require(`../../CONSTS`)
const Sequelize = require('sequelize')
const Post = require('./Scheme')//future 
//put in your db in CONSTS file
const sequelize = new Sequelize(`mysql://${CONSTS.dbConfig.name}:${CONSTS.dbConfig.password}@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/${CONSTS.dbConfig.dbName}`)

class PopulateDb {
    constructor() {
        this.UserSocialCounter = this.GetTableSize
    }
    async insertNewUserToDb(password, name) {
        let newUser = await sequelize
            .query(`INSERT INTO User VALUES(null,${password},${name})`)

        return newUser
    }
    async insertTokensToDb(internalID, socialNetWorkName, accessToken, accessTokenSecret, TwitterId) {
        let tokensTOdb = await sequelize
            .query(`INSERT INTO SocialNetworkData VALUES(null,${internalID},${socialNetWorkName},${TwitterId},'${accessToken}','${accessTokenSecret}')`)
        return tokensTOdb
    }
    // insetIntoUserNetworkTable() {
    //     sequelize
    //         .query(`INSERT INTO User_SocialNetwork VALUES(${this.UserSocialCounter},${this.UserSocialCounter})`)
    //         .then(function (result) {
    //             console.log(result)
    //             // this.UserSocialCounter++
    //         })
    // }
    async GetExcsitingClientAccessTokens(userId, SocialNetwork_NAME) {
        let result = await sequelize
            .query(`
                SELECT 
                    SocialNetworkToken, 
                    SocialNetworkTokenSecret
                FROM 
                    SocialNetworkData 
                WHERE
                    User_id= ${userId} AND
                    SocialNetwork_NAME= '${SocialNetwork_NAME}'`)
        let results = JSON.parse(JSON.stringify(result[0]))
        console.log(results)
        let accessToken = results[0].accessToken
        let accessTokenSecret = results[0].accessTokenSecret
        return { accessToken: accessToken, accessTokenSecret: accessTokenSecret }
    }
    async getUserId(password, name) {
        let result = await sequelize
            .query(`SELECT id 
            FROM User 
            WHERE
                User.password='${password}' AND
                User.name='${name}'`
            )
        result = JSON.parse(JSON.stringify(result[0]))
        return result

    }
    // GetTableSize() { // We may need it
    //     sequelize
    //         .query(`SELECT COUNT(User_id)
    //      FROM User`)
    //         .then(function (result) {
    //             this.UserSocialCounter = result
    //         })
    // }
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



module.exports = sqlOperations

// let post2= new Post({

//     postId: 2,
//     userIdkey: "2",
//     text: "Second post",
//     socialNetwork: ["Twitter"]

// })

// post2.save()
// testPost.save()