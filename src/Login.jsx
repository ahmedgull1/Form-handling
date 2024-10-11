import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
    email: "",
    password: "",
};

function Login() {
    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("formData")) || [];
        if(savedData){
            setData(savedData);

        }

    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handlevalidation = () => {

        const errors = {}
        if (!email) {
            errors.email = "please enter your email address";
        }
        if (!password) {
            errors.email = "please enter your password";
        }
        setError(errors)
        return Object.keys(errors).length==0;
    }


    const handleSubmit = () => {

        const isValid = handlevalidation();

        if(isValid){
            setData=([...data, formData])
        }

        if (data) {
            const userExists = data.find((user)=> user.email == formData.email && user.password == formData.password );

            if (userExists) {

                alert('Login successful');
            } else {
                alert('Please sign up first');
            }
        }

        setFormData(initialState);
    };




    
      console.log(data)
      console.log(formData)
    return (
        <>
            <form className="max-w-md h-[450px] mt-10 bg-[#1F2937] border mx-auto px-4  flex flex-col gap-1 space-y-2 py-5 font-[sans-serif] text-[#333]  rounded-md">
                <h1 className='text-center text-white max-w-md  mx-auto text-xl font-bold py-4 underline cursor-pointer'>Log in to your account</h1>
                <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 shadow-md  p-2 w-full placeholder:text-[15px]  outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                />
                {error && <span className='text-red-500  border'>{error.email}</span>}

                <input
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    className=" bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 p-2 shadow-md  glass w-full placeholder:text-[15px]  outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                />
                {error && <span className='text-red-500  border'>{error.password}</span>}


                <div className=" flex">
                    <input
                        class="form-checkbox h-6 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                        type="checkbox"
                    /> <span className='px-2 text-gray-300'>Remember me</span>
                </div>

                <button
                    onClick={handleSubmit}
                    className=" bg-[#5f6875a9]  rounded-md text-gray-300 placeholder:text-gray-300 outline-none  placeholder:text-[10px] p-2 shadow-md  w-full  border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
                    type="submit"
                >
                    Sign-In
                </button>





                <button

                    className="outline-none py-2 text-gray-300 placeholder:text-[10px] p-2 shadow-md  w-full font-bold"
                    type="submit"
                >
                    Don't have an account? <Link to={"/signup"}><span className='hover:text-[#035ec5] underline'>Sign up</span> </Link>
                </button>


            </form>
        </>
    );
}

export default Login;
