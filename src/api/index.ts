import axios from "axios";
import { User } from '../decl';

export const postUser = async(User: User) : Promise<User>=> {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/users`,
            User
          );
          return res.data;
    }
    catch(error) {
        throw new Error("An error occurred saving the user.");
    }
}