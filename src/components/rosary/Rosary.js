import "./Rosary.css"
import { GrPowerReset } from "react-icons/gr";
import { MdExposurePlus1 } from "react-icons/md";
import {useState} from "react";
import song from "../image/song.mp3"

function Rosary () {
    let [count, setCount] = useState(0)
    let [total, setTotal] = useState(0)
    const increment = () => {
        if (count < 33) {
            setCount(count + 1)
        }
        if (count === 33) {
            setCount(1)

        }
        setTotal(total + 1)
    }
    const reset = () => {
        setCount(0)
        setTotal(0)
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="top">
                    <button onClick={reset}><GrPowerReset/></button>
                </div>
                <div className="center">
                    <h3><span>{count}</span> / <span>33</span></h3>
                    <p>Total : <span>{total}</span></p>
                </div>
                <div className="bottom">
                    <button onClick={increment}><MdExposurePlus1/></button>
                </div>
            </div>

            <audio  src={song}></audio>
        </div>
    )
}

export default Rosary