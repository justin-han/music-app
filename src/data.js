import { v4 as uuidv4 } from "uuid";

function data() {
    return [
        {
            name: "Bleuming",
            cover: "https://i1.sndcdn.com/artworks-000639153094-86pyu2-original.jpg",
            artist: "IU",
            audio: "bleuming.mp3",
            color: ["#E4C7CB", "#8A8BA9"],
            id: uuidv4(),
        },
        {
            name: "BBIBBI",
            cover: "https://i1.sndcdn.com/artworks-000417647409-8pg6nk-original.jpg",
            artist: "IU",
            audio: "bbibbi.mp3",
            color: ["#98CCFD", "#03A5F4"],
            id: uuidv4(),
        },
        {
            name: "LILAC",
            cover: "https://i1.sndcdn.com/artworks-JfTJW4QQazE1TDLd-3Xtzaw-original.jpg",
            artist: "IU",
            audio: "lilac.mp3",
            color: ["#DCDBD6", "#F1EAFC"],
            id: uuidv4(),
        },
        {
            name: "Not Spring, Love, or Cherry Blossoms",
            cover: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/58/dd/86/58dd8626-594e-7f43-c791-ac74f6f96c76/KM0002693-High4_DS-0408.jpg/1200x1200bf-60.jpg",
            artist: "IU",
            audio: "notspring.mp3",
            color: ["#F8F7F5", "#DEC396"],
            id: uuidv4(),
        },
        {
            name: "Good Day",
            cover: "https://i1.sndcdn.com/artworks-000090881151-jg71ro-t500x500.jpg",
            artist: "IU",
            audio: "goodday.mp3",
            color: ["#922828", "#120F0F"],
            id: uuidv4(),
        }
    ]
}

export default data