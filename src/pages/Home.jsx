import styles from './Home.module.css'
import { useState } from 'react';

function Home()
{
    const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let result = "";
    const [hextext, setHextext] = useState("#FFFFFF");

    function createRandomHex()
    {
        let result = "#";
        for (let i = 0; i < 6; i++) {
            result += hex[Math.floor(Math.random() * hex.length)];
        }

        document.body.style.backgroundColor = result;
        setHextext(result);
    }

    return (
        <div className={styles.mainContainer}>
            <button onClick={createRandomHex}>Criar HEX aleatório</button>
            <h1>{hextext}</h1>
        </div>
    )
}

export default Home;