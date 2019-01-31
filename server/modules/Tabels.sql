Use AlonRR_db;

-- CREATE TABLE User(
--     id INT NOT NULL AUTO_INCREMENT NULL PRIMARY KEY,
--     password VARCHAR(50),
--     name VARCHAR(50)
-- );

-- CREATE TABLE Twitter(
--     id INT NOT NULL AUTO_INCREMENT NULL PRIMARY KEY,
--     Twitter_id INT,
--     accessToken VARCHAR(150),
--     accessTokenSecret VARCHAR(150)
-- );

-- CREATE TABLE  User_SocialNetwork(
--     User_id INT,
--     Twitter_id INT,
--    FOREIGN KEY(User_id) REFERENCES User(id),
--    FOREIGN KEY(Twitter_id) REFERENCES Twitter(id)
-- );



-- INSERT INTO User VALUES(null,'1234','daniel')
-- INSERT INTO User VALUES(null,'1234','Alon');
-- INSERT INTO Twitter VALUES(null,1220749249 ,'1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg','DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb');
-- INSERT INTO User_SocialNetwork VALUES(1,1);


-- DELETE FROM AlonRR_db.Twitter ;

  -- SELECT id FROM User WHERE
  -- password= '1234' AND
  -- name= 'daniel'


  
  
  
  
  
  
  
  
-- DROP TABLE User_SocialNetwork;
-- DROP TABLE User;
-- DROP TABLE Twitter;