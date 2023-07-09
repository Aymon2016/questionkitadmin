

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './registerAndLogin.scss'
import { Link } from "react-router-dom"

const Login = () => {

    const URL = import.meta.env.VITE_backendurl

    const init = {
        email: '',
        password: '',

    }

    const checkValidity = (values) => {
        const errors = {};

        const { email, password } = values;

        if (!email) {
            errors.email = 'Invalid email';
        }

        if (!password) {
            errors.password = 'Invalid password';
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [users, setUsers] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setUsers(() => {
            return {
                ...users,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(users);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { email, password, } = users
        if (isValid) {

            // await axios.post(`${URL}/api/v1/users`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",

            //     },
            //     body: JSON.stringify({
            //          email, password
            //     })

            // }).then(response => {

            //     if (response.status === 200) {
            //         toast.error("Created Successfully 😃!", {
            //             position: "top-center"
            //         });

            //         setUsers({
            //             ...users,
            //           
            //             email: '',
            //      
            //             password: '',
            //           
            //         });

            //     }
            // })
            //     .catch(error => {

            //         if (error?.response?.status !== 200) {
            //             toast.error("Create not Sucessfull 👎!", {
            //                 position: "top-center"
            //             });

            //         }

            //     })
        }

    }


    return (
        <div className="usersContainer">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>

                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="john@gmail.com"
                            name='email'
                            value={users.email}
                            onChange={addData}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="password"
                            name='password'
                            value={users.password}
                            onChange={addData}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={sendData}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login