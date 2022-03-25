import axios from "axios";
import { User, Phone } from '../decl';

export const postUser = async(User: User) : Promise<User>=> {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/users`,
            User
        );
        console.log(User.phone)
        await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/code`,
            {
                phone: User.phone
            }
        )
        return res.data;
    }
    catch(error) {
        throw new Error("An error occurred saving the user.");
    }
}

export const postPhoneValidation = async(Phone: Phone) : Promise<Phone>=> {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/auth/check-code`,
            Phone
        );
          
        return res.data;
    }
    catch(error) {
        throw new Error("An error occurred saving the user.");
    }
}