import { AiFillPlusCircle} from "react-icons/ai";
import { useState } from "react";

const Question = ({title, info, getId, id, questionSelected}) => {

const selected = id === questionSelected

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => getId(id)} >
          
          <AiFillPlusCircle />
        </button>
      </header>

      <p>{selected? info: null}</p>
    </article>
  );
}
export default Question