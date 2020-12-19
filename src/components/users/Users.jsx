import React from "react";
import UserItem from "./UserItems";
import Spinner from "../layout/Spinner";

function Users(props){  

    if(props.loading){
        return <Spinner />
    }else{
        return(
            
            <div className="row row-cols-4 justify-content-md-center" >
                {props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }

}



export default Users;