import { v4 as uuidv4 } from "uuid";

function data() {
    return [
        {
            name: "Bleuming",
            cover: "https://i1.sndcdn.com/artworks-000639153094-86pyu2-original.jpg",
            artist: "IU",
            audio: "https://dl2.soundcloudmp3.org/api/download/eyJpdiI6IkNTbEVObnVOMHZpUVB5YlptaklaUWc9PSIsInZhbHVlIjoiQ1hyak81SnVhMERjNDI2SHVBSkhldVdEZzJCVWlWWmxpTXpjXC9sbnA4N2VuQUhWU3MxQmdSS1Rhb0JuMVJLckRINVFPdnhMM0x3QkNBRDBVbXE1cUFyZGRWZG9OTHNQaUp2RGZKUHFpWWJ5UWdxaXF2RU9hc0xmdldqWjRoOTc5ODViZ1ZkSXRDQTVQamhMTjVUaEhpZz09IiwibWFjIjoiMzRhZjlhYWIwNDFkYmUxOTcyYTczYTQyMDU4YjEzNTYyNDk5Yzg5Yjc5NWYwNDUyMzE0MGJiMjBmMzNjMjNjMiJ9",
            color: ["#E4C7CB", "#8A8BA9"],
            id: uuidv4(),
            active: true
        },
        {
            name: "BBIBBI",
            cover: "https://i1.sndcdn.com/artworks-000417647409-8pg6nk-original.jpg",
            artist: "IU",
            audio: "https://dl3.soundcloudmp3.org/api/download/eyJpdiI6ImlBVTNmZFZETjViWUE3Vjd3SDZPTkE9PSIsInZhbHVlIjoiTjJEVVVZN1A1NVcwU3JuSTY3QUI3dFFEK3VzaEZTUzVrQVBva2RvRVZyK2xsUHduSis5VE5oQjFRNHJHZW5qU3ZmSVBwcmlDVnlBYnRhNXc2b085TlFjXC9YQUUrMHMzdEpqTVhzYVkwK00wPSIsIm1hYyI6ImY3Y2ZhZTFmNjFhYjg5ZTRhN2I4YTQ0Mzg1ZjRjZjFlNDkwY2Y4MjRmOWVjMmRjMGYzODdlYTdmNzRiNDQ5OTQifQ==",
            color: ["#98CCFD", "#03A5F4"],
            id: uuidv4(),
            active: false
        },
        {
            name: "LILAC",
            cover: "https://i1.sndcdn.com/artworks-JfTJW4QQazE1TDLd-3Xtzaw-original.jpg",
            artist: "IU",
            audio: "https://dl4.soundcloudmp3.org/api/download/eyJpdiI6InNrdlYydzlIS2pUd0xFRitNWUZsSGc9PSIsInZhbHVlIjoiMXE4UjIrZENEN3UxbTNwNGZzd2ZaemZQWFRJXC91cFBwTUNaQm5NTWJDSUI3SjNLT01LWnc4cXRJYkFYQ0dSZzdnU3pQOUk0Nko2VlZBbENMM3dYR2RTYkpNdUN1ZmhMbkdzSFduSTFiSFZXOG0rNFI2MTNYZ2JYenE5cjR1S0NtaDBqWlRYbjF5MVg5S21ubStoSm1BZz09IiwibWFjIjoiYjRkODFmNjU2MDhhYTBhM2ExMTk5NWIyNTFkODY5YTY1OWNlNGUxNWQ1NjJjOTgwMTE3NDg0MjA0ZTJlNDQ0YSJ9",
            color: ["#DCDBD6", "#F1EAFC"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Not Spring, Love, or Cherry Blossoms",
            cover: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/58/dd/86/58dd8626-594e-7f43-c791-ac74f6f96c76/KM0002693-High4_DS-0408.jpg/1200x1200bf-60.jpg",
            artist: "IU",
            audio: "https://dl3.soundcloudmp3.org/api/download/eyJpdiI6IjFPdEZMRFZrTFZ6RHhJTkNCcWxCZEE9PSIsInZhbHVlIjoiYm5hVGFNNGNoVWhcL2hyVGZOSmdHWkFBeVZaQmhLTE55cmpuUDd3TXhJeDlMczlPTWNNRHFYXC9Qbk5zK2pKWWtEZTVxSmJYSUxIVTZKZEJHNmVzVE1FelBrcVl1Q2tqZjg1NGRHVWw0enNzRWNTb3U0QlVRbkJFckFcL1pKUEZyYnRISU9pODVBZmo0bjZsTUhBaXV2S3pTNm93MVRxcE14eVE1OThPd1BPYUlXdWlxdjZsYmpcL2RUZVRaXC9WMGltNnhNTlZLZ202WStRMXpcL2ZiNDNOaTFVaUozeGE2b0xTNE1sRkROaG9jMWlnZz0iLCJtYWMiOiIyYjM4ZmM2NTk4Y2RiNjVhZjBkZjMzNzI4NGViNTc4MTlkYThhMzYzMTM5YWJlY2VmYjgyNTQxMjMyY2RmMzljIn0=",
            color: ["#F8F7F5", "#DEC396"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Good Day",
            cover: "https://i1.sndcdn.com/artworks-000090881151-jg71ro-t500x500.jpg",
            artist: "IU",
            audio: "https://dl1.soundcloudmp3.org/api/download/eyJpdiI6InNpSWN5T3V6VktkU2FDamNZdHFhRmc9PSIsInZhbHVlIjoia3Ntc0taQ2hqc1VmWTZqZ2JsWE1pd0JmTFJJdzhZYVZUakgwRFNycEJXTkNmSWFFYU5IUUl0ZUIyOUNkQ2t3SURkSTExUE0ydWRBVUtwbGtEZHllRlNzaWFmS3RoUllyWTFHYlJJWHdLc2M9IiwibWFjIjoiZjdmMzJmMDkwZDg5NjA4OGExYmFlZGU4MDZhZjlhMjg5ZWFkOTQyZjk1MzVkZDFjMTUyNDdhNzZhMzQ3ZWI2YyJ9",
            color: ["#922828", "#120F0F"],
            id: uuidv4(),
            active: false
        }
    ]
}

export default data