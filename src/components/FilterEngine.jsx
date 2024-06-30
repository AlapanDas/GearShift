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
                props.isSpin(true);
                let response = await fetch('https://gearshift-backend.onrender.com/car/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Data),
                    credentials: 'include',
                })
                let data = await response.json()
                if(data.car.length!==0){
                    document.cookie = `filterData=${encodeURIComponent(JSON.stringify(data))};max-age=172800`
                }
                props.isSpin(false);
                props.whenClick(data);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div id='Search-filter' className=' m-auto mt-4 mb-8 w-min sm:w-fit'>
            <form className='flex flex-col lg:flex-row justify-center mx-auto' onSubmit={collection_data}>
                <div className='flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row border-2 border-onprimary lg:px-1 rounded-md'>
                    <div className='flex justify-center items-center flex-col py-3 px-24 border-b-2 sm:border-r-2 sm:px-10 sm:border-b-2 md:border-b-0 border-onprimary'>
                        <label htmlFor="selection-for-budget" className='text-center text-2xl sm:text-xl font-bold text-darkbgbtn dark:text-btncol'>Budget</label>
                        <select name="budget" id="budget" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option  value='' className=' text-onprimary text-center'>Select</option>
                            <option className="text-center" value='{"min":2000,"max":10000}'>$2000 to $10000</option>
                            <option className="text-center" value='{"min":10001,"max":20000}'>$10001 to $20000</option>
                            <option className="text-center" value='{"min":20001,"max":30000}'>$20001 to $30000</option>
                            <option className="text-center" value='{"min":30001,"max":40000}'>$30001 to $40000</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center flex-col py-3 px-24 border-b-2 sm:border-r-0 md:border-r-2 lg:px-10 sm:border-b-2 md:border-b-0 sm:px-10 border-onprimary'>
                        <label htmlFor="selection-for-color" className='text-center text-2xl sm:text-xl font-bold text-darkbgbtn dark:text-btncol'>Color</label>
                        <select name="color" id="color" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option  value='' className='text-onprimary text-center'>Select</option>
                            <option className="text-center" value="black">Black</option>
                            <option className="text-center" value="silver">Silver</option>
                            <option className="text-center" value="blue">Blue</option>
                            <option className="text-center" value="red">Red</option>
                            <option className="text-center" value="gray">Gray</option>
                            <option className="text-center" value="orange">Orange</option>
                            <option className="text-center" value="white">White</option>
                            <option className="text-center" value="charcoal">Charcoal</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center flex-col py-3 px-24 border-b-2 sm:border-b-0 sm:border-r-2 lg:px-10 sm:px-10 border-onprimary'>
                        <label htmlFor="selection-for-brand" className='text-center text-2xl sm:text-xl font-bold text-darkbgbtn dark:text-btncol'>Brand</label>
                        <select name="brand" id="brand" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option  value='' className='text-onprimary text-center'>Select</option>
                            <option className="text-center" value="toyota">Toyota</option>
                            <option className="text-center" value="ford">Ford</option>
                            <option className="text-center" value="dodge">Dodge</option>
                            <option className="text-center" value="chevrolet">Chevrolet</option>
                            <option className="text-center" value="gmc">GMC</option>
                            <option className="text-center" value="chrysler">Chrysler</option>
                            <option className="text-center" value="kia">KIA</option>
                            <option className="text-center" value="buick">Buick</option>
                            <option className="text-center" value="infiniti">Infiniti</option>
                            <option className="text-center" value="mercedes-benz">Mercedes-benz</option>
                            <option className="text-center" value="jeep">Jeep</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center flex-col py-3 px-24 lg:px-10 sm:px-10 border-onprimary'>
                        <label htmlFor="selection-for-model" className='text-center text-2xl sm:text-xl font-bold text-darkbgbtn dark:text-btncol'>Model</label>
                        <select name="model" id="model" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                            <option  value='' className='text-onprimary text-center'>Select</option>
                            <option className="text-center" value="cruiser">Cruiser</option>
                            <option className="text-center" value="se">SE</option>
                            <option className="text-center" value="mpv">MPV</option>
                            <option className="text-center" value="door">Door</option>
                            <option className="text-center" value="1500">1500</option>
                            <option className="text-center" value="pk">PK</option>
                            <option className="text-center" value="malibu">Malibu</option>
                            <option className="text-center" value="coupe">Coupe</option>
                            <option className="text-center" value="wagon">Wagon</option>
                            <option className="text-center" value="forte">Forte</option>
                            <option className="text-center" value="encore">Encore</option>
                            <option className="text-center" value="sorento">Sorento</option>
                            <option className="text-center" value="doors">Doors</option>
                            <option className="text-center" value="q70">Q70</option>
                            <option className="text-center" value="vans">Vans</option>
                            <option className="text-center" value="srw">SRW</option>
                            <option className="text-center" value="compass">Compass</option>
                            <option className="text-center" value="enclave">Enclave</option>
                            <option className="text-center" value="cherokee">Cherokee</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='bg-onprimary h-10 w-28 text-centerfont-bold px-4 py-2 rounded-md my-5 mx-auto lg:my-auto lg:ml-8 hover:shadow-sm  hover:opacity-90  text-primary dark:text-black'><FontAwesomeIcon icon={faMagnifyingGlass} ></FontAwesomeIcon><span> Search</span></button>
            </form>
        </div>
    )
}

export default FilterEngine