import { User } from "@prisma/client";
import { sendEmailtoUser } from "~/service/user";




const dummyData: User = {
    id: "001a",
    email_address: "pvagrawal0@gmail.com",
}


export default function Avatar() {
    return (
        <div className="avatar" onClick={() => handleAvatarClick(dummyData)}>
            <div className="w-24 rounded">
                <img src="~/../public/tyler.jpg" />
            </div>
        </div>
    )
}

export function handleAvatarClick(dummyData: User){
    sendEmailtoUser(dummyData);

}

// this is going to be how we handle a real grid
/*
export function handleAvatarClick(user: User){


}
*/