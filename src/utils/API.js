import axios from "axios";

const API = "https://api.imgur.com/3/";

const PARAMS={
    headers: {Authorization: "Client-ID dc5a29116fff477"},
};

const getAlbumId = ()=> {
    return axios.get(`${API}/account/juliiasekret/albums/ids/0`,PARAMS);
}

const getAlbumImages = (hash)=> {
    return axios.get(`${API}/account/juliiasekret/album/${hash}`, PARAMS);
}


export {getAlbumId, getAlbumImages};