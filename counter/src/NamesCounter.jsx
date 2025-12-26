import { useState } from "react";
import { IoCloseCircleOutline, IoReload } from "react-icons/io5";

const names = ['Nazir Ahmad', 'Maqbool Ahmad', 'Noor Rehman', 'Mehran Khan', 'AlamShar', 'Waseem Khan', 'Amir Khan', 'Usman Bhai', 'Shakeel Ahmad', 'Mohsan', 'Asad', 'Salman', 'Waheed', 'Farooq', 'Arsalan', 'Idress Ahmad', 'Naqeeb', 'Ali Sher', 'Gohar', 'Khair Muhammad', 'Raza', 'Adil',];

function NamesCounter({ onCloseNC }) {

    const [name, setName] = useState(0)
    const [started, setStarted] = useState(false)

    const nextButton = () => {
        setStarted(true)
        setName((nextName) => (nextName + 1) % names.length);
    }
    const prevButton = () => {
        setName((nextName) => (nextName - 1 + names.length) % names.length);
    }

    const resetNames = () =>
        {setStarted(false);
        setIndex(0);
    };


    return (
        <>
            <div className="counter-container">
                <div className="counter">
                    <h2 className="counter-box"> 
                        {started? names[name] : "Names Counter"}
                    </h2>

                    <button onClick={resetNames} className='reload-btn'> <IoReload /> </button>

                </div>

                <div >
                    <button className="name-btn" onClick={prevButton}>Prev Names</button>
                    <button className="name-btn" onClick={nextButton}>Next Names</button>
                </div>


                <button onClick={onCloseNC} className='close-btn' > <IoCloseCircleOutline /> </button>
            </div>
        </>
    )
}
export default NamesCounter;