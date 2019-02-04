import { action, observable } from 'mobx';

class MainPostPageStore {
    @observable Postlist = [`Post1`, `Post2`, `Post3`, `Post4`, `Post5`, `Post6`, `Post7`, `Post8`];

    @observable newPostPopUp = {
        visible: false
    }
    @observable Postlist2 = {    
        facebook: {
            Post1: {
                Text: "First post!",
                id: "p1",
                Likes: 50,
                Shares: 3,
                comments:  [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            Post2: {
                Text: "Aw man, I wanted to be first",
                id: "p2",
                Likes: 4,
                Shares: 0,
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            },
            Post3: {
                Text: "Day2, no progress",
                id: "p3",
                Likes: 12,
                Share: 1,
                comments: [
                    { id: "c7", text: "Don't worry, it'll be all right" },
                    { id: "c8", text: "Stay strong" },
                    { id: "c9", text: "You can do it!" }
                ]
    
            }
        },
        twitter: {
            Twit1: {
                Text: "Great day ahead!",
                id: "t1",
                Likes: 63,
                Retwits: 3,
                comments: [
                    { id: "c1", text: "Yesssss!" },
                    { id: "c2", text: "No!!!!!!!" },
                    { id: "c3", text: "Wohh!" }
                ]
            }
        },
        instagram: {
            Story1: {
                Text: "Look at my cat",
                Image: "https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg",
                Likes: 107,
                Shares: 15,
                comments: [
                    { id: "c1", text: "I love this cat" },
                    { id: "c2", text: "Awesome cat!!!" },
                    { id: "c3", text: "Super cute!" }
                ]
            }
        },
        linkdin: {
            Post1: {
                Text: "Looking for a job",
                Likes: 20,
                Shares: 2,
                comments: [
                    { id: "c1", text: "Come work with me" },
                    { id: "c2", text: "Good luck" },
                ]
            }
        }

    } 
}

export default new MainPostPageStore()
