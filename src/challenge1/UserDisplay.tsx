import {UserDisplayComponent} from "./types";
import {create_user} from "./service";

const UserDisplay: UserDisplayComponent = (user) => {
    const onClick = () => {
        // imagine in a magic land this calls the server and refreshes the user session
        create_user({
            id: Date.now().toString(),
            name: 'John',
            type: 'regular',
            email: 'john@doe.com'
        });
    };

    if(user.name && user.email){
        return <div>Hello {user.name} ({user.email})!</div>;
    }else{
        return <div onClick={onClick}>Register Now!</div>;
    }
};

export default UserDisplay;
