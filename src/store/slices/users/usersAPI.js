import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        const data = usersData.map(user => ({
            id: user.id.toString(),
            username: user.username.toLowerCase(),
            name: user.name,
            email: user.email.toLowerCase(),
            avatar: 'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png',
            followers: Math.round(Math.random() * 400 + 400),
            following:  Math.round(Math.random() * 400 + 400),
            bio: user.company.catchPhrase,
            password: user.address.city.toLowerCase(),
            messages: [],
            posts: [
                ...postsData.filter(post => post.albumId === user.id)
                            .map(post => ({
                                id: post.id.toString(),
                                name: user.username.toLowerCase(),
                                likesCount: Math.round(Math.random() * 500 + 500),
                                timeAgo: Math.round(Math.random() * 8 + 2) + 'Minutes Ago',
                                postText: post.title.slice(post.title.indexOf(' ') + 1),
                                img: post.url,
                                comment: Math.round(Math.random() * 8 + 2)
                            }))
            ]
        }))
           return data
    }
)