Use danielkar1_db;

-- CREATE TABLE User(
--     id INT NOT NULL AUTO_INCREMENT NULL PRIMARY KEY,
--     passwordToApp VARCHAR(50),
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


-- DROP TABLE User_SocialNetwork
-- DROP TABLE User;
-- DROP TABLE Twitter;

INSERT INTO User VALUES(null,'1234','daniel')
  -- SELECT id FROM  User WHERE
  -- passwordToApp= 1234 AND
  -- name= 'daniel'