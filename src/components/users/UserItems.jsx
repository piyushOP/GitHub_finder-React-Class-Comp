import React from "react";
import {Link} from "react-router-dom";


function UserItem(props){
    const {login ,avatar_url} = props.user;

    return(
        <div className="card user-item col-lg-3">
            <img 
                src={avatar_url}  
                alt="Photo" 
                className="round-img text-centre"  
                style={{width: "60px"}}
            />
            <h3>{login}</h3>

            <div>
                <Link to={"/user/"+login} className="btn btn-dark btn-sm my-1" >More</Link>
            </div>
        </div>
    );
}



export default UserItem;