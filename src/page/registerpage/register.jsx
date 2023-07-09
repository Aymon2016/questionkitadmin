

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './registerAndLogin.scss'
import { Link } from "react-router-dom"

const Register = () => {

    const URL = import.meta.env.VITE_backendurl

    const init = {
        name: '',
        email: '',
        instituteName: '',
        ipAddress: '',
        service: '',
        status: '',
        role: '',
        password: '',
        cpassword: '',
    }

    const checkValidity = (values) => {
        const errors = {};

        const { name, email, instituteName, ipAddress, service, status, role, password, cpassword } = values;


        if (!name) {
            errors.name = 'Invalid name';
        }

        if (!email) {
            errors.email = 'Invalid email';
        }
        if (!instituteName) {
            errors.instituteName = 'Invalid instituteName';
        }
        if (!ipAddress) {
            errors.ipAddress = 'Invalid ipAddress';
        }
        if (!service) {
            errors.service = 'Invalid service';
        }
        if (!status) {
            errors.status = 'Invalid status';
        }
        if (!role) {
            errors.role = 'Invalid role';
        }
        if (!password) {
            errors.password = 'Invalid password';
        }
        if (password !== cpassword) {
            errors.cpassword = 'password did not match'
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

        const { name, email, instituteName, ipAddress, service, status, role, password, } = users
        if (isValid) {

            // await axios.post(`${URL}/api/v1/users`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",

            //     },
            //     body: JSON.stringify({
            //         name, email, instituteName, ipAddress, service, status, role, password
            //     })

            // }).then(response => {

            //     if (response.status === 200) {
            //         toast.error("Created Successfully 😃!", {
            //             position: "top-center"
            //         });

            //         setUsers({
            //             ...users,
            //             name: '',
            //             email: '',
            //             instituteName: '',
            //             ipAddress: '',
            //             service: '',
            //             status: '',
            //             role: '',
            //             password: '',
            //             cpassword: ''
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
                <div className="Auth-form-content" id='overflow'>
                    <h3 className="Auth-form-title">Sign up</h3>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="name"
                            className="form-control mt-1"
                            placeholder="john smith"
                            name='name'
                            value={users.name}
                            onChange={addData}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
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
                        <label>Institute Name</label>
                        <input
                            type="instituteName"
                            className="form-control mt-1"
                            placeholder="xyz coching center"
                            name='instituteName'
                            value={users.instituteName}
                            onChange={addData}
                        />
                        {errors.instituteName && <p>{errors.instituteName}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>IpAddress</label>
                        <input
                            type="ipAddress"
                            className="form-control mt-1"
                            placeholder="11.120.555.00"
                            name='ipAddress'
                            value={users.ipAddress}
                            onChange={addData}
                        />
                        {errors.ipAddress && <p>{errors.ipAddress}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Service</label>
                        <select
                            className="form-control mt-1"
                            name="service"
                            value={users.service}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {users.service ? users.service : 'Select a Plan'}
                            </option>
                            <option value="1">1 Month</option>
                            <option value="6">6 Month</option>
                            <option value="12">12 Month</option>
                        </select>
                        {errors.service && <p>{errors.service}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Status</label>
                        <select
                            className="form-control mt-1"
                            name="status"
                            value={users.status}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {users.status ? users.status : 'Select a status'}
                            </option>
                            <option value="unblock">unblock</option>
                            <option value="block">Block</option>
                        </select>
                        {errors.status && <p>{errors.status}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Role</label>
                        <select
                            className="form-control mt-1"
                            name="role"
                            value={users.role}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {users.role ? users.role : 'Select a role'}
                            </option>
                            <option value="User">User </option>
                            <option value="Moderator">Moderator </option>
                            <option value="Admin">Admin</option>

                        </select>
                        {errors.bookName && <p>{errors.bookName}</p>}
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
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            type="cpassword"
                            className="form-control mt-1"
                            placeholder="confirm password"
                            name='cpassword'
                            value={users.cpassword}
                            onChange={addData}
                        />
                        {errors.cpassword && <p>{errors.cpassword}</p>}
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

export default Register