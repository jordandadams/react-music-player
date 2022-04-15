//lists of all songs for the app
import { v4 as uuidv4 } from "uuid"; //https://www.npmjs.com/package/uuidv4

function chillHop() {
    return [
        {
            name: "When I'm With U",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
            artist: "C Y G N",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31612",
            color: ["#E7CBBE", "#EFE1E0"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Glow",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg",
            artist: "Tesk",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32888",
            color: ["#BC2E4C", "#2F3D66"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Seagulls",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist: "Misha, Zmeyev, Viktor Minsky",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
            color: ["#F9D3BA", "#6E696F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Reunion",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/f8a2b91e3d3862dc91cd27e3f82ddc089c0ccd58-1024x1024.jpg",
            artist: "Stan Forebee",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30137",
            color: ["#AFA7AF", "#A7BCAD"],
            id: uuidv4(),
            active: false,
        },
    ];
}