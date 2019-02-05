import { action, observable } from 'mobx';
import Axios from 'axios';
class MainPostPageStore {

    @observable Postlist = []

    @action getPosts = async () => {
        let postlist = await Axios.get('http://localhost:8080/posts')
        this.Postlist = postlist
        console.log(this.Postlist)
    }
    @observable newPostPopUp = {
        visible: false
    }
    @observable currentMainPost = 'Post1'
    @observable checkCurrentMainPost() {
        console.log(this.currentMainPost)
    }
    @observable socialNetImg = {
        facebook: "fab fa-facebook-square",
        twitter: "fab fa-twitter-square",
        instagram: "fab fa-instagram",
        linkdin: "fab fa-linkedin"
    }

    @observable Postlist2 = {
        Post1: {
            Text: "First post!",
            SocialNets: {
                facebook: {
                    id: "facebookP1",
                    Likes: 50,
                    Shares: 3,
                    comments: [
                        { id: "c1", text: "First comment on first post!" },
                        { id: "c2", text: "Second comment on first post!!" },
                        { id: "c3", text: "Third comment on first post!!!" }
                    ]
                },
                twitter: {
                    id: "twitterP1",
                    Likes: 22,
                    Shares: 1,
                    comments: [
                        { id: "c4", text: "Yesssss!" },
                        { id: "c5", text: "No!!!!!!!" },
                        { id: "c6", text: "Wohh!" }
                    ]
                },
                instagram: {
                    id: "instagramP1",
                    Likes: 53,
                    Shares: 4,
                    comments: [
                        { id: "c7", text: "Yesssss!" },
                        { id: "c8", text: "Booo!" },
                    ]
                },
                linkdin: {
                    id: "linkdinP1",
                    Likes: 3,
                    Shares: 0,
                    comments: []
                }
            }
        },
        Post2: {
            Text: "Aw man, I wanted to be first",
            SocialNets: {
                facebook: {
                    id: "facebookP2",
                    Likes: 27,
                    Shares: 1,
                    comments: [
                        { id: "c9", text: "Don't wory second poster, you'll be first one day." },
                        { id: "c10", text: "Yeah, believe in yourself!" },
                        { id: "c11", text: "Haha second place what a joke." }
                    ]
                },
                twitter: {
                    id: "twitterP2",
                    Likes: 15,
                    Shares: 1,
                    comments: [
                        { id: "c12", text: "Nobody cares" },
                        { id: "c13", text: "Boring" }
                    ]
                },
                instagram: {
                    id: "instagramP2",
                    Likes: 23,
                    Shares: 0,
                    comments: [
                        { id: "c14", text: "Pudding jelly beans muffin." },
                        { id: "c15", text: "Donut gingerbread donut macaroon." },
                        { id: "c16", text: "Bear claw I love lemon drops." },
                        { id: "c17", text: "Croissant macaroon I love pastry croissant bonbon." }
                    ]
                },
                linkdin: {
                    id: "linkdinP2",
                    Likes: 5,
                    Shares: 1,
                    comments: [
                        { id: "c18", text: "Sugar plum sweet muffin soufflé." }
                    ]
                }
            }
        },
        Post3: {
            Text: "Brownie sweet roll topping liquorice jelly-o tiramisu chocolate bar candy canes",
            SocialNets: {
                facebook: {
                    id: "facebookP3",
                    Likes: 132,
                    Shares: 15,
                    comments: [
                        { id: "c19", text: "Topping topping marzipan tiramisu." },
                        { id: "c20", text: "Chocolate donut cookie donut jelly-o!" },
                        { id: "c21", text: "Liquorice marzipan muffin." },
                        { id: "c22", text: "Gummi bears dragée cheesecake" },
                        { id: "c23", text: "Apple pie carrot cake liquorice." }
                    ]
                },
                twitter: {
                    id: "twitterP3",
                    Likes: 76,
                    Shares: 7,
                    comments: [
                        { id: "c24", text: "I love cheese, especially smelly cheese manchego." },
                        { id: "c25", text: "Dolcelatte ricotta cheesecake." }
                    ]
                },
                instagram: {
                    id: "instagramP3",
                    Likes: 92,
                    Shares: 22,
                    comments: [
                        { id: "c26", text: "Pudding jelly beans muffin." },
                        { id: "c27", text: "Donut gingerbread donut macaroon." },
                        { id: "c28", text: "Babybel cut the cheese croque monsieur." },
                        { id: "c29", text: "Monterey jack." },
                        { id: "c30", text: "Feta babybel port-salut cheeseburger the big cheese airedale goat stilton." },
                        { id: "c31", text: "Jarlsberg danish fontina melted cheese babybel.." }
                    ]
                },
                linkdin: {
                    id: "linkdinP3",
                    Likes: 27,
                    Shares: 5,
                    comments: [
                        { id: "c32", text: "Rubber cheese manchego monterey jack. " }
                    ]
                }
            }
        }
    }
}

let test = new MainPostPageStore()
test.getPosts()

export default new MainPostPageStore()

