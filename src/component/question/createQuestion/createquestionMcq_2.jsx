
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './createquestion.scss'
import { Link } from "react-router-dom"

const CreateQuestionMcq_2 = () => {

    const URL = import.meta.env.VITE_backendurl

    const init = {

        serial: '',
        classes: '',
        bookName: '',
        chapter: '',
        type: '',
        question: '',
        question_i: '',
        question_ii: '',
        question_iii: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        answer: ''
    }

    const checkValidity = (values) => {
        const errors = {};

        const { serial, classes, bookName, chapter, type, question, question_i, question_ii, question_iii, option_a, option_b, option_c, option_d, answer } = values;


        if (!serial) {
            errors.serial = 'Invalid Serial';
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
        if (!question) {
            errors.question = 'Invalid question';
        }
        if (!question_i) {
            errors.question_i = 'Invalid question_i';
        }
        if (!question_ii) {
            errors.question_ii = 'Invalid question_ii';
        }
        if (!question_iii) {
            errors.question_iii = 'Invalid question_iii';
        }
        if (!option_a) {
            errors.option_a = 'Invalid Option_a';
        }
        if (!option_b) {
            errors.option_b = 'Invalid option_b';
        }
        if (!option_c) {
            errors.option_c = 'Invalid option_c';
        }
        if (!option_d) {
            errors.option_d = 'Invalid option_d';
        }
        if (!answer) {
            errors.answer = 'Invalid Answer';
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

        const { serial, classes, bookName, chapter, type, question, question_i, question_ii, question_iii, option_a, option_b, option_c, option_d, answer } = questions
        if (isValid) {

            await axios.post(`${URL}/api/v1/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    serial, classes, bookName, chapter, type, question, question_i, question_ii, question_iii, option_a, option_b, option_c, option_d, answer
                })

            }).then(response => {

                if (response.status === 200) {
                    toast.error("Created Successfully 😃!", {
                        position: "top-center"
                    });

                    setQuestion({
                        ...question,
                        serial: '',
                        classes: '',
                        bookName: '',
                        chapter: '',
                        type: '',
                        question: '',
                        question_i: '',
                        question_ii: '',
                        question_iii: '',
                        option_a: '',
                        option_b: '',
                        option_c: '',
                        option_d: '',
                        answer: ''
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
                        <label>Question</label>
                        <input
                            type="question"
                            className="form-control mt-1"
                            placeholder="type your question"
                            name='question'
                            value={questions.question}
                            onChange={addData}
                        />
                        {errors.question && <p>{errors.question}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>question_i</label>
                        <input
                            type="question_i"
                            className="form-control mt-1"
                            placeholder="type your question_i"
                            name='question_i'
                            value={questions.question_i}
                            onChange={addData}
                        />
                        {errors.question_i && <p>{errors.question_i}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>question_ii</label>
                        <input
                            type="question_ii"
                            className="form-control mt-1"
                            placeholder="type your question_ii"
                            name='question_ii'
                            value={questions.question_ii}
                            onChange={addData}
                        />
                        {errors.question_ii && <p>{errors.question_ii}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>question_iii</label>
                        <input
                            type="question_iii"
                            className="form-control mt-1"
                            placeholder="type your question_iii"
                            name='question_iii'
                            value={questions.question_iii}
                            onChange={addData}
                        />
                        {errors.question_iii && <p>{errors.question_iii}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Option_a</label>
                        <select
                            className="form-control mt-1"
                            name="option_a"
                            value={questions.option_a}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.option_a ? questions.option_a : 'Select option_a'}
                            </option>
                            <option value="i">i </option>
                            <option value="i,ii">i,ii</option>
                            <option value="i,iii">i,iii</option>
                            <option value="ii,iii">ii,iii</option>
                            <option value="i,ii,iii">i,ii,iii</option>
                            <option value="none">None</option>
                        </select>
                        {errors.option_a && <p>{errors.option_a}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Option_b</label>
                        <select
                            className="form-control mt-1"
                            name="option_b"
                            value={questions.option_b}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.option_b ? questions.option_b : 'Select option_b'}
                            </option>
                            <option value="i">i </option>
                            <option value="i,ii">i,ii</option>
                            <option value="i,iii">i,iii</option>
                            <option value="ii,iii">ii,iii</option>
                            <option value="i,ii,iii">i,ii,iii</option>
                            <option value="none">None</option>
                        </select>
                        {errors.option_b && <p>{errors.option_b}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Option_c</label>
                        <select
                            className="form-control mt-1"
                            name="option_c"
                            value={questions.option_c}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.option_c ? questions.option_c : 'Select option_c'}
                            </option>
                            <option value="i">i </option>
                            <option value="i,ii">i,ii</option>
                            <option value="i,iii">i,iii</option>
                            <option value="ii,iii">ii,iii</option>
                            <option value="i,ii,iii">i,ii,iii</option>
                            <option value="none">None</option>
                        </select>
                        {errors.option_c && <p>{errors.option_c}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Option_d</label>
                        <select
                            className="form-control mt-1"
                            name="option_d"
                            value={questions.option_d}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.option_d ? questions.option_d : 'Select option_d'}
                            </option>
                            <option value="i">i </option>
                            <option value="i,ii">i,ii</option>
                            <option value="i,iii">i,iii</option>
                            <option value="ii,iii">ii,iii</option>
                            <option value="i,ii,iii">i,ii,iii</option>
                            <option value="none">None</option>
                        </select>
                        {errors.option_d && <p>{errors.option_d}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Answer</label>
                        <select
                            className="form-control mt-1"
                            name="answer"
                            value={questions.answer}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.answer ? questions.answer : 'Select answer'}
                            </option>
                            <option value="option_a">Option_a </option>
                            <option value="option_b">Option_b</option>
                            <option value="option_c">Option_c</option>
                            <option value="option_d">Option_d</option>
                        </select>
                        {errors.answer && <p>{errors.answer}</p>}
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

export default CreateQuestionMcq_2