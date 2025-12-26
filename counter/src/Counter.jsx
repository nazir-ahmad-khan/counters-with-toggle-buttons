
import { IoCloseCircleOutline, IoReload } from 'react-icons/io5';
import './Counter.css';
import { useState } from 'react';


function Counter({onClose}) {


    // const [openCounter, setOpenCounter] = useState(true);
    const [count, setCount] = useState(0);

    const next = () => {
        setCount(count + 1);
    };

    const prev = () => {
        setCount(count - 1)
    }

    const refreshCount = () => {
        setCount(0)
    }

    return (
        <>
            {/* <div className="btn-container">
                <button onClick={() => setOpenCounter(true)} className="btn">Toggle Names Counter</button>
                <button onClick={() => setOpenCounter(true)} className="btn">Toggle Counter</button>
            </div> */}


            {/* { */}
                {/* openCounter && */}
                <div className="counter-container">
                    <div className="counter">
                        <h1 className="counter-box"> {count} </h1>
                        <button onClick={refreshCount} className='reload-btn'> <IoReload /> </button>
                    </div>

                    <div >
                        <button className="update-btn" onClick={prev}>-</button>
                        <button className="update-btn" onClick={next}>+</button>
                    </div>

                    <button onClick={onClose} className='close-btn'><IoCloseCircleOutline /></button>
                </div>
            {/* } */}

        </>
    )
}
export default Counter;