const CONSTS = require(`../CONSTS`)
const Sequelize = require('sequelize')
const Post = require('../server/modules/Scheme')
const mongoose = require(`mongoose`)
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:3000/Posts', { useNewUrlParser: true })
const sequelize = new Sequelize(`mysql://${CONSTS.dbConfig.name}:${CONSTS.dbConfig.password}@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/${CONSTS.dbConfig.dbName}`)

class PopulateDb {
    async insertNewUserToDb(password, name) {
        let newUser = await sequelize
            .query(`
            INSERT INTO 
                User 
            VALUES(null,'${password}','${name}')`)
        console.log(`newuser`)
        console.log(newUser)
        return newUser
    }
    async insertTokensToDb(internalID,socialNetWorkName, accessToken, accessTokenSecret, socialNetworkId) {
        let tokensTOdb = await sequelize
            .query(`
            INSERT INTO 
                SocialNetworkData 
            VALUES(null,${internalID},${socialNetWorkName},'${socialNetworkId}','${accessToken}','${accessTokenSecret}')`)
        return tokensTOdb
    }
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
        return {
            accessToken: results[0].SocialNetworkToken,
            accessTokenSecret: results[0].SocialNetworkTokenSecret
        }
    }
    async getUserId(password, name) {
        let result = await sequelize
            .query(`
            SELECT 
                id 
            FROM
                User 
            WHERE
                User.password='${password}' AND
                User.name='${name}'`)
        result = JSON.parse(JSON.stringify(result[0]))
        return result[0]
    }
    savepost(post, img) {
        let newpost = new Post({ post: post })
        newpost.save()
    }
}
const sqlOperations = new PopulateDb()

module.exports = sqlOperations