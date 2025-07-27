import {User} from "./types";

/**
 * returns id of newly created user
 */
export function create_user(data:Pick<User, 'type' | 'name' | 'email'>):string{
    const id = stub_database_call({
        name: data.name,
        type: data.type,
        email: data.email
    });

    return id;
}

function stub_database_call(data:Record<string, unknown>){
    return Date.now().toString();
}
