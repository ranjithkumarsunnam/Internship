import { useState } from "react";

function Student(props){
    const [like,setLike] =useState(0);
    const [status,setStatus]=useState("Offilne");
        return(
        <div className="box">
            <div className="Profile">
                🧑‍🎓
            </div>

            <h2>{props.name}</h2>

            <p><stronge>Course:{props.course}</stronge></p>
            <p><strong>College:{props.college}</strong></p>
            <h2>❤️Like:{like}</h2>
            <h2> 🧑‍🎓Status:{status}</h2>
            <div className="Buttons">

            <button className="likeBtn" onClick ={()=>setLike(like+1)}>👍Like</button>
            <button className="statusBtn" onClick={()=>setStatus(status === "Offilne" ? "Online" : "Offilne")}>Change Status </button>
        </div>
        </div>
    );
}
export default Student;

