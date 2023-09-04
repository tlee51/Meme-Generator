import React from "react"
// import memesData from "../memesData"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    // React.useEffect(() => {                                              //this is the .then version of promises
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, [])

    React.useEffect(() => {                                                 //this is the async/await version of promises
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    })

    // console.log(allMemes);

    function getMemeImage() {
        // const allMemes = allMemes.data.memes;
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url          //video forgot this line but if we include it could just write 
                                                             //setMemeImage(url) below
        // console.log(url)
        // setMemeImage(memeImage => url)                    //this way follows the counter example's arrow notation, aka method 3 out of 
                                                             //1 (setCount = (count + 1))
                                                             //2 callbackfunction, setCount(function (oldValue) {
                                                                //return oldValue + 1
                                                             //})
                                                             //3 callbackfunction (arrow notation), setCount(prevCount => prevCount + 1)
        // setMeme(url)           //video does this way because we don't care about old state ("")
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target;          //destructuring
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}></img>
                <h2 className="meme--texttop">{meme.topText}</h2>
                <h2 className="meme--textbottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}