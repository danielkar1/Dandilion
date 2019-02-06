Use AlonRR_db;

-- CREATE TABLE User(
--     id INT NOT NULL AUTO_INCREMENT NULL PRIMARY KEY,
--     password VARCHAR(50),
--     name VARCHAR(50)
-- );



-- CREATE TABLE SocialNetworkData(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     User_id INT,
--     SocialNetwork_NAME VARCHAR(25),
--     SocialNetwork_id VARCHAR(30),
--     SocialNetworkToken VARCHAR(1000),
--     SocialNetworkTokenSecret VARCHAR(400),
--     FOREIGN KEY(User_id) REFERENCES User(id)

-- );


-- INSERT INTO User VALUES(null,'2222','daniel');
-- INSERT INTO User VALUES(null,'123456','Alon');
--  INSERT INTO SocialNetworkData VALUES(null,1,"Twitter",1220749249 ,'1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg','DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb');
-- INSERT INTO SocialData VALUES(null,1532535667 ,'1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg','DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb',null,null,null);

-- SELECT SocialNetworkToken,SocialNetworkTokenSecret FROM SocialNetworkData WHERE
-- User_id= 1;
