const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://danielkar1:12345678@fs-bootcamp.cqc0oq2maxqm.us-west-2.rds.amazonaws.com/danielkar1_db')
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';


@observer
class PopulateDb extends  Component {
    @observeble userId
    @observable accessToken
    @observable accessTokenSecret
    @observable UserSocialCounter=this.GettableSize()
   @action insertNewUserToDb=(password,name)=>{
    sequelize
    .query(`INSERT INTO User VALUES(null,${password},${name})`)
    .then(function (result) {
        console.log(result)

    })
    }

  @action  insertTokenToDb=()=>{
    sequelize
    .query(`INSERT INTO Twitter VALUES(null,'1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg','DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb')`)
    .then(function (result) {
        console.log(result)
    })
    }

   @action insetIntoUserNetworkTable=()=>{
    sequelize
    .query(`INSERT INTO User_SocialNetwork VALUES(${this.UserSocialCounter},${this.UserSocialCounter})`)
    .then(function (result) {
        console.log(result)
        this.UserSocialCounter++
    })
    }

    @action GetExcsitingClientAccessTokens= (userId,SocielNetworkType)=>{
     sequelize
    .query(`SELECT accessToken,accessTokenSecret FROM User_SocialNetwork,User,${SocielNetworkType} WHERE User_SocialNetwork.User_id=${userId}`)
    .then(function (result) {
        results = JSON.parse(JSON.stringify(result[0]))
         this.accessToken =results[0].accessToken
        this.accessTokenSecret=results[0].accessTokenSecret
        console.log(accessTokenSecret)
    })

}
    @action getUserId=(password,name)=>{
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
     @action GettableSize=()=>{
         sequelize
         .query(`SELECT COUNT(User_id)
         FROM User`)
             .then(function(result){
                 this.UserSocialCounter= result
             })
     }   

    }


const userId=1
const SocielNetworkType= 'Twitter'
GetAccessTokens(userId,SocielNetworkType)
    

export default PopulateDb
