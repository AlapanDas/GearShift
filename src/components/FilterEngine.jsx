import React,{ useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FilterEngine(props) {

    const [Data, setData] = useState({
        brand: "",
        budget: "",
        model: "",
        color: ""
    });

    let dataChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let new_val;
        if (name === "budget") {
            if (value === '') {
                new_val = value;
            } else {
                new_val = JSON.parse(value);
            }
        } else {
            new_val = value;
        }
        setData({ ...Data, [name]: new_val });
    };

    let collection_data = async (e) => {
        e.preventDefault();
        if (Data.brand === "" && Data.budget === "" && Data.color === "" && Data.model === "") {
            alert("Please choose at least one filter criteria");
        } else {
            try {
                let response = await fetch('https://gearshift-backend.onrender.com/car/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Data),
                    credentials: 'include',
                })
                let data = await response.json()
                props.whenClick(data);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div id='Search-filter' className=' m-auto mt-4 mb-8'>
            <form className='flex flex-col lg:flex-row justify-center' onSubmit={collection_data}>
                <div className='flex flex-col sm:flex-row border-2 border-notif lg:px-1 rounded-md'>
                    <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 sm:px-10 sm:border-b-0 border-notif'>
                        <label htmlFor="selection-for-budget" className='text-center text-xl font-bold text-notif'>Budget</label>
                        <select name="budget" id="budget" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option value='' className=' text-notif'>Select</option>
                            <option value='{"min":2000,"max":10000}'>$2000 to $10000</option>
                            <option value='{"min":10001,"max":20000}'>$10001 to $20000</option>
                            <option value='{"min":20001,"max":30000}'>$20001 to $30000</option>
                            <option value='{"min":30001,"max":40000}'>$30001 to $40000</option>
                        </select>
                    </div>
                    <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 lg:px-10 sm:border-b-0 sm:px-10 border-notif'>
                        <label htmlFor="selection-for-color" className='text-center text-xl font-bold text-notif'>Color</label>
                        <select name="color" id="color" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option value='' className='text-notif'>Select</option>
                            <option value="black">Black</option>
                            <option value="silver">Silver</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="gray">Gray</option>
                            <option value="orange">Orange</option>
                            <option value="white">White</option>
                            <option value="charcoal">Charcoal</option>
                        </select>
                    </div>
                    <div className='flex flex-col py-3 px-32 border-b-2 sm:border-b-0 sm:border-r-2 lg:px-10 sm:px-10 border-notif'>
                        <label htmlFor="selection-for-brand" className='text-center text-xl font-bold text-notif'>Brand</label>
                        <select name="brand" id="brand" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option value='' className='text-notif'>Select</option>
                            <option value="toyota">Toyota</option>
                            <option value="ford">Ford</option>
                            <option value="dodge">Dodge</option>
                            <option value="chevrolet">Chevrolet</option>
                            <option value="gmc">GMC</option>
                            <option value="chrysler">Chrysler</option>
                            <option value="kia">KIA</option>
                            <option value="buick">Buick</option>
                            <option value="infiniti">Infiniti</option>
                            <option value="mercedes-benz">Mercedes-benz</option>
                            <option value="jeep">Jeep</option>
                        </select>
                    </div>
                    <div className='flex flex-col py-3 px-32 lg:px-10 sm:px-10 border-notif'>
                        <label htmlFor="selection-for-model" className='text-center text-xl font-bold text-notif'>Model</label>
                        <select name="model" id="model" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option value='' className='text-notif'>Select</option>
                            <option value="cruiser">Cruiser</option>
                            <option value="se">SE</option>
                            <option value="mpv">MPV</option>
                            <option value="door">Door</option>
                            <option value="1500">1500</option>
                            <option value="pk">PK</option>
                            <option value="malibu">Malibu</option>
                            <option value="coupe">Coupe</option>
                            <option value="wagon">Wagon</option>
                            <option value="forte">Forte</option>
                            <option value="encore">Encore</option>
                            <option value="sorento">Sorento</option>
                            <option value="doors">Doors</option>
                            <option value="q70">Q70</option>
                            <option value="vans">Vans</option>
                            <option value="srw">SRW</option>
                            <option value="compass">Compass</option>
                            <option value="enclave">Enclave</option>
                            <option value="cherokee">Cherokee</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='bg-notif h-10 w-28 text-center text-white font-bold px-4 py-2 rounded-md my-5 mx-auto lg:my-auto lg:ml-8 hover:shadow-sm  hover:scale-105'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }}></FontAwesomeIcon><span> Search</span></button>
            </form>
        </div>
    )
}

export default FilterEngine