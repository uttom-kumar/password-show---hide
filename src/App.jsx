import React, {useState} from 'react';
import {BiSolidHide, BiSolidShow} from "react-icons/bi";

const App = () => {
    const [showPassword, setShowPassword] = useState(true)

    const ShowPasswordBtn = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <div className="container" >
                <div className="col-6 mx-auto my-5">
                    <form>
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <input placeholder="password" type={showPassword ? "password" : "text" }
                                   className='form-control'
                            />
                            <button type="button" onClick={ShowPasswordBtn} className="btn btn-primary rounded-0">
                                {!showPassword? <BiSolidShow />: <BiSolidHide /> }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;