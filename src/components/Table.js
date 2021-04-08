import React from "react"
import "./HOF.css"
export default function Table(props)
{
    return(
        <div>
            <table className="HOFtable">
                <tbody>
                    {props.userData.map((userObj) => {
                    return (
                        <tr key={userObj.id}>
                        <td className="col-padding">{`id:${userObj.id}`}</td>
                        <td className="col-padding">{`name:${userObj.name}`}</td>
                        <td className="col-padding">{`User type:${userObj.user_type}`}</td>
                        <td className="col-padding"></td>
                        </tr>
                    );
                    })}
                </tbody>
        </table>
        </div>
    );
}

