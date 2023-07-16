import Model from "../../component/shared/model/model";
import { useState } from "react";
import './questionpage.scss';
import CreateQuestion from '../../component/question/createQuestion/createquestionMcq_1';
import QuestionShow from "../../component/question/showQuestion/QuestionShow";
import CreateQuestionCq from "../../component/question/createQuestion/createquestionCq";
import CreateQuestionMcq_2 from "../../component/question/createQuestion/createquestionMcq_2";
import CreateQuestionMcq_3 from "../../component/question/createQuestion/createquestionMcq_3";
import CreateQuestionMcq_4 from "../../component/question/createQuestion/createquestionMcq_4";

const Questionpage = () => {
    const [cq, setCq] = useState(false);
    const [mcq1, setMcq1] = useState(false);
    const [mcq2, setMcq2] = useState(false);
    const [mcq3, setMcq3] = useState(false);
    const [mcq4, setMcq4] = useState(false);


    const handleClickOpenCq = () => {
        setCq(true);
        setMcq1(false);
        setMcq2(false);
        setMcq3(false);
        setMcq4(false);

    };

    const handleCloseCq = () => {
        setCq(false);
    };
    const handleClickOpenMcq1 = () => {
        setCq(false);
        setMcq1(true);
        setMcq2(false);
        setMcq3(false);
        setMcq4(false);

    };

    const handleCloseMcq1 = () => {
        setMcq1(false);
    };
    const handleClickOpenMcq2 = () => {
        setCq(false);
        setMcq1(false);
        setMcq2(true);
        setMcq3(false);
        setMcq4(false);

    };

    const handleCloseMcq2 = () => {
        setMcq2(false);
    };
    const handleClickOpenMcq3 = () => {
        setCq(false);
        setMcq1(false);
        setMcq2(false);
        setMcq3(true);
        setMcq4(false);

    };

    const handleCloseMcq3 = () => {
        setMcq3(false);
    };
    const handleClickOpenMcq4 = () => {
        setCq(false);
        setMcq1(false);
        setMcq2(false);
        setMcq3(false);
        setMcq4(true);

    };

    const handleCloseMcq4 = () => {
        setMcq4(false);
    };
    return (
        <div className="questionContainer" >
            <h3 style={{ textAlign: 'center' }}>Create Question</h3>
            <div className="createButton"
                style={{
                    display: 'flex',
                    flexDirection: "row",
                    gap: '10px'
                }}
            >
                <button
                    onClick={handleClickOpenCq}>
                    CQ
                </button>
                <button
                    onClick={handleClickOpenMcq1}>
                    MCQ
                </button>
                <button
                    onClick={handleClickOpenMcq2}>
                    MCQ 2
                </button>
                <button
                    onClick={handleClickOpenMcq3}>
                    MCQ 3
                </button>
                <button
                    onClick={handleClickOpenMcq4}>
                    MCQ 4
                </button>
            </div>
            <div className='Body'>
                {
                    cq ? <Model handleClose={handleCloseCq} open={open}>
                        <CreateQuestionCq />
                    </Model> : ''
                }

                {
                    mcq1 ? <Model handleClose={handleCloseMcq1} open={open}>
                        <CreateQuestion />
                    </Model> : ''
                }
                {
                    mcq2 ? <Model handleClose={handleCloseMcq2} open={open}>
                        <CreateQuestionMcq_2 />
                    </Model> : ''
                }
                {
                    mcq3 ? <Model handleClose={handleCloseMcq3} open={open}>
                        <CreateQuestionMcq_3 />
                    </Model> : ''
                }
                {
                    mcq4 ? <Model handleClose={handleCloseMcq4} open={open}>
                        <CreateQuestionMcq_4 />
                    </Model> : ''
                }
                <QuestionShow />
            </div>
        </div>
    );
};

export default Questionpage;
