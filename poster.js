const Twitter = require(`twitter`)

const secrt = {
    consumer_key: 'gSv7GyHtsEfrU6eI0YKjc2gZV ',
    consumer_secret: 'Epj0df5yZU8G4SRsGqT4KQxsTE65KRmbuNcFjjagoeT41AFiYu',
    access_token_key: 'g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg',
    access_token_secret: 'DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb'
}

const tweet = new Twitter(secrt)

tweet.post(`statuses/update`, { status: 'I Love Tech Knights!' }, function (error, tweet, response) {
    if (error) {
        console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.)
})