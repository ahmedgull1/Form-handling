import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
const initialState = {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    conformpassword: "",
};

function Signup() {
    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
        setData(savedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(data));
    }, [data]);

    const { firstName, LastName, email, password, conformpassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleValidation = () => {
        const errors = {};

        if (!email) {
            errors.email = "Please enter your email address.";
        }
        if (!password) {
            errors.password = "Please enter your password.";
        }
        if (!conformpassword) {
            errors.conformpassword = "Please enter your conform password.";
        }

        setError(errors);
        return Object.keys(errors).length;
    };

    const handleSubmit = () => {
      
        const isValid = handleValidation();

        if (isValid == 0) {
            const newData = [...data, formData];
            setData(newData);
            localStorage.setItem('formData', JSON.stringify(newData));
            setFormData(initialState);
            alert('Registration successfully');
        }
    };






    console.log(data)
    console.log(formData)
    return (
        <>
            <form className="px-2 mx-auto max-w-md  rounded-md mt-10 space-y-4 h-[450px] border bg-[#1F2937] grid justify-center items-center">
                <div className="grid gap-6">
                    <div className="w-full flex gap-2  h-10">
                        <input
                            onChange={handleChange}
                            value={firstName}
                            className="bg-[#5f6875a9] h-[10] rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] hover:border-solid hover:border-[1px]  "
                            type="text"
                            placeholder="First Name"
                            id="First-Name"
                            name="firstName"
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={LastName}
                            className="bg-[#5f6875a9] h-[10] rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2  glass w-full  outline-none focus:border-solid focus:border-[1px] border-[#035ec5] hover:border-solid hover:border-[1px] "
                            type="text"
                            placeholder="Last Name"
                            id="Last-Name"
                            name="LastName"
                            required
                        />
                    </div>
                    <div className="  w-full">
                        <input
                            onChange={handleChange}
                            value={email}
                            className="bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md glass p-2 w-full placeholder:text-[15px]  outline-none focus:border-solid border-[#035ec5] focus:border-[1px] hover:border-solid hover:border-[1px]  "
                            type="email"
                            placeholder="Email"
                            id="Email"
                            name="email"
                            required
                        /> <br />
                        {error.email && <span className='text-red-500'>{error.email}</span>}
                        <br />
                        <input
                            onChange={handleChange}
                            className="bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 h-[10] w-full  outline-none focus:border-solid focus:border-[1px] border-[#035ec5] hover:border-solid hover:border-[1px]  "
                            type="date"
                            required
                        />
                    </div>

                    <div className="  h-[60px] ">
                        <div className=" flex gap-2 h-[37px]">
                            <input
                                onChange={handleChange}
                                value={password}
                                className="bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] hover:border-solid hover:border-[1px]  "
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                required
                            />
                            <input
                                onChange={handleChange}
                                value={conformpassword}
                                name="conformpassword"
                                className="bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] hover:border-solid hover:border-[1px]  "
                                type="password"
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                        {error.password && <span className='text-red-500     w-full'>{error.password}</span>}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="outline-none bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 h-[10] placeholder:text-[10px] w-full    border-[#035ec5] hover:border-solid hover:border-[1px]   font-bold"
                        type="submit"
                    >
                        Submit
                    </button>


                    <h1 className=' text-white text-center font-bold'> Already have an acount ? <Link to="/home "><span className='underline cursor-pointer hover:text-blue-500 '> Signin</span></Link> </h1>

                </div>
            </form>
        </>
    );
}

export default Signup