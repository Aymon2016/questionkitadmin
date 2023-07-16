
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './createquestion.scss'
import { Link } from "react-router-dom"

const CreateQuestionCq = () => {

    const URL = import.meta.env.VITE_backendurl


    const init = {

        serial: '',
        oddipok: '',
        classes: '',
        bookName: '',
        chapter: '',
        type: '',
        question_a: '',
        question_b: '',
        question_c: '',
        question_d: '',
        answer_a: '',
        answer_b: '',
        answer_c: '',
        answer_d: ''
    }

    const checkValidity = (values) => {
        const errors = {};

        const { serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d } = values;


        if (!serial) {
            errors.serial = 'Invalid Serial';
        }

        if (!oddipok) {
            errors.oddipok = 'Invalid oddipok';
        }
        if (!classes) {
            errors.classes = 'Invalid Class';
        }
        if (!bookName) {
            errors.bookName = 'Invalid BookName';
        }
        if (!chapter) {
            errors.chapter = 'Invalid Chapter';
        }
        if (!type) {
            errors.type = 'Invalid Type';
        }
        if (!question_a) {
            errors.question_a = 'Invalid question_a';
        }
        if (!question_b) {
            errors.question_b = 'Invalid question_b';
        }
        if (!question_c) {
            errors.question_c = 'Invalid question_c';
        }
        if (!question_d) {
            errors.question_d = 'Invalid question_d';
        }
        if (!answer_a) {
            errors.answer_a = 'Invalid answer_a';
        }
        if (!answer_b) {
            errors.answer_b = 'Invalid answer_b';
        }
        if (!answer_c) {
            errors.answer_c = 'Invalid answer_c';
        }
        if (!answer_d) {
            errors.answer_d = 'Invalid answer_d';
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [questions, setQuestion] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setQuestion(() => {
            return {
                ...questions,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(questions);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d } = questions
        if (isValid) {

            await axios.post(`${URL}/api/v1/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d
                })

            }).then(response => {

                if (response.status === 200) {
                    toast.error("Created Successfully 😃!", {
                        position: "top-center"
                    });

                    setQuestion({
                        ...questions,
                        serial: '',
                        oddipok: '',
                        classes: '',
                        bookName: '',
                        chapter: '',
                        type: '',
                        question_a: '',
                        question_b: '',
                        question_c: '',
                        question_d: '',
                        answer_a: '',
                        answer_b: '',
                        answer_c: '',
                        answer_d: ''
                    });

                }
            })
                .catch(error => {

                    if (error?.response?.status !== 200) {
                        toast.error("Create not Sucessfull 👎!", {
                            position: "top-center"
                        });

                    }

                })
        }

    }


    return (
        <div className="questionContainer">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Create Question</h3>
                    <div className="form-group mt-3">
                        <label>Serial</label>
                        <input
                            type="serial"
                            className="form-control mt-1"
                            placeholder="120"
                            name='serial'
                            value={questions.serial}
                            onChange={addData}
                        />
                        {errors.serial && <p>{errors.serial}</p>}
                    </div>

                    <div className="form-group mt-3">
                        <label>Class</label>
                        <select
                            className="form-control mt-1"
                            name="classes"
                            value={questions.classes}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.classes ? questions.classes : 'Select a class'}
                            </option>
                            <option value="6">class 6</option>
                            <option value="7">class 7</option>
                            <option value="8">class 8</option>
                            <option value="9">class 9</option>
                            <option value="10">class 10</option>
                            <option value="11">class 11</option>
                            <option value="2">class 12</option>
                        </select>
                        {errors.classes && <p>{errors.classes}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Book Name</label>
                        <select
                            className="form-control mt-1"
                            name="bookName"
                            value={questions.bookName}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.bookName ? questions.bookName : 'Select a Book'}
                            </option>
                            <option value="bangla">Bangla </option>
                            <option value="english">English</option>

                        </select>
                        {errors.bookName && <p>{errors.bookName}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Chapter</label>
                        <select
                            className="form-control mt-1"
                            name="chapter"
                            value={questions.chapter}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.chapter ? questions.chapter : 'Select a Chapter'}
                            </option>
                            <option value="1">1 </option>
                            <option value="2">2</option>
                            <option value="3">3 </option>
                            <option value="4">4</option>
                            <option value="5">5 </option>
                            <option value="6">6</option>
                            <option value="7">7 </option>
                            <option value="8">8</option>
                            <option value="9">9 </option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>

                        </select>
                        {errors.chapter && <p>{errors.chapter}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Type</label>
                        <select
                            className="form-control mt-1"
                            name="type"
                            value={questions.type}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.type ? questions.type : 'Select Question Type'}
                            </option>
                            <option value="hard">Hard </option>
                            <option value="medium">Medium</option>
                            <option value="easy">Easy</option>
                        </select>
                        {errors.type && <p>{errors.type}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Oddipok</label>
                        <input
                            type="oddipok"
                            className="form-control mt-1"
                            placeholder="type your oddipok"
                            name='oddipok'
                            value={questions.oddipok}
                            onChange={addData}
                        />
                        {errors.oddipok && <p>{errors.oddipok}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Question_A</label>
                        <input
                            type="question_a"
                            className="form-control mt-1"
                            placeholder="type your question_a"
                            name='question_a'
                            value={questions.question_a}
                            onChange={addData}
                        />
                        {errors.question_a && <p>{errors.question_a}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Question_b</label>
                        <input
                            type="question_b"
                            className="form-control mt-1"
                            placeholder="type your question_b"
                            name='question_b'
                            value={questions.question_b}
                            onChange={addData}
                        />
                        {errors.question_b && <p>{errors.question_b}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Question_c</label>
                        <input
                            type="question_c"
                            className="form-control mt-1"
                            placeholder="type your question_c"
                            name='question_c'
                            value={questions.question_c}
                            onChange={addData}
                        />
                        {errors.question_c && <p>{errors.question_c}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Question_d</label>
                        <input
                            type="question_d"
                            className="form-control mt-1"
                            placeholder="type your question_d"
                            name='question_d'
                            value={questions.question_d}
                            onChange={addData}
                        />
                        {errors.question_d && <p>{errors.question_d}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Answer_a</label>
                        <input
                            type="answer_a"
                            className="form-control mt-1"
                            placeholder="type your answer_a"
                            name='answer_a'
                            value={questions.answer_a}
                            onChange={addData}
                        />
                        {errors.answer_a && <p>{errors.answer_a}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Answer_b</label>
                        <input
                            type="answer_b"
                            className="form-control mt-1"
                            placeholder="type your answer_b"
                            name='answer_b'
                            value={questions.answer_b}
                            onChange={addData}
                        />
                        {errors.answer_b && <p>{errors.answer_b}</p>}
                    </div>

                    <div className="form-group mt-3">
                        <label>Answer_c</label>
                        <input
                            type="answer_c"
                            className="form-control mt-1"
                            placeholder="type your answer_c"
                            name='answer_c'
                            value={questions.answer_c}
                            onChange={addData}
                        />
                        {errors.answer_c && <p>{errors.answer_c}</p>}
                    </div>
                    <div className="form-group mt-3 ">
                        <label>Answer_d</label>
                        <input
                            type="answer_d"
                            className="form-control mt-1"
                            placeholder="type your answer_d"
                            name='answer_d'
                            value={questions.answer_d}
                            onChange={addData}
                        />
                        {errors.answer_d && <p>{errors.answer_d}</p>}
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

export default CreateQuestionCq