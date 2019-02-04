import { action, observable } from 'mobx';

class MainPostPageStore {
    @observable Postlist = [`Post1`, `Post2`, `Post3`, `Post4`, `Post5`, `Post6`, `Post7`, `Post8`];

    @observable newPostPopUp = {
        visible: false
    }
    @observable Postlist2 = {
        Post1: {
            Text: "First post!",
            id: "p1",
            Likes: 50,
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
            comments: [
                
            ]

        }
    }
}

export default new MainPostPageStore()
