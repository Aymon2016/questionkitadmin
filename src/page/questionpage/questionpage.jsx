import Model from "../../component/shared/model/model";
import { useState } from "react";
import './questionpage.scss';
import CreateQuestion from './createQuestionForm/createquestion';
import QuestionShow from "./createQuestionForm/showQuestion/QuestionShow";

const Questionpage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="questionContainer" >
            <button
                onClick={handleClickOpen}>
                Create Question
            </button>
            <div className='Body'>
                {
                    open ? <Model handleClose={handleClose} open={open}>
                        <CreateQuestion />
                    </Model> : <QuestionShow />
                }

            </div>
        </div>
    );
};

export default Questionpage;
