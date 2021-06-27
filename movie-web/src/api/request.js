import axios from "axios"

// const url = 'http://www.omdbapi.com/?apikey=faf7e5bb&s=marvel'; //sample
const rootPath = 'http://www.omdbapi.com'
const apiKey = 'apikey=faf7e5bb'

const GET = (path) => {
    const promise = new Promise((resolve, reject)=>{             
        axios.get(`${rootPath}/?${apiKey}&s=${path}`)
        .then((res)=> {
            resolve(res.data)               
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

const getListMovie = (data) => GET((data==='') ? 'batman' : data)

const API = {
    getListMovie
}

export default API;