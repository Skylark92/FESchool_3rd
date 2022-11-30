import React, { useState } from "react";

function Resume(props) {
    const [like, setLike] = useState(0);
    // let heart = like % 2 === 1 ? "❤️" : "";
    let clap = String(like).match(/[369]/g);

    //짝👏
    function handleClickLike() {
        // setLike(like + 1)
        // console.log(like);
        setLike(like + 1);
    }

    return (
        <div>
            <button onClick={handleClickLike}>like : {like}</button>
            {/* <span>{clap ? clap : ""}</span> */}
        </div>
    );
}

function App() {
    return (
        <div>
            <Resume />
        </div>
    );
}

export default App;
