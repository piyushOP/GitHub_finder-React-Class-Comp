import React, { useState } from "react";


function Search(props){

    const [state, setState] = useState({text: ""});
    let value = "";
    function handleChange(event){
        value = event.target.value;
        setState(()=>{
            return {text: value};
        });
    }

    function onSubmit(event){
        event.preventDefault();
        if(state.text === ""){
            props.setAlert("Please Enter Something","danger");
        }else{
            props.searchUsers(state.text)
            setState(()=>{
                return {text: ""};
            });
        }
    }

    const {showClear, clearUsers} = props;

    return(
        <div>
            <form  onSubmit={onSubmit} className="d-grid gap-2">
                <input type="text" value={state.text} onChange={handleChange} placeholder="Search Users......" className="form-control form-control-sm"/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            <div className="d-grid gap-2">
                {showClear && <button className="btn btn1" onClick={clearUsers} type="button">Clear</button> }
            </div>
        </div>
    );

}



export default Search;