import React, { useState } from 'react';
import './Signup.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
interface State {
  firstName: string;
  phone: string;
}

const Signup3 = () => {
  const { state } = useLocation();
  console.log(state);
  const [code, setCode] = useState<number>(0);
  const [message, setMesssage] = useState<string>();

  const navigate = useNavigate();

  const getPhoneNumber = (state: State): string => {
    return state.phone;
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const phone = getPhoneNumber(Object(state));
      //const loggedUser = await postPhoneValidation({ phone, code});
      setMesssage('Success Login !')
      navigate('/younglanding', {state: phone});
    } catch (error) {
      setMesssage('Erreur lors de l\'inscription ! Vérifier tous les champs !')
    }
  }
  
  return (
    <div className="signup">
      <Header color="White"/>
      <div className="container">
        <h1 className="title title_white">Inscription</h1>
        <form>
          <div className="input">
          <div className='input_first_raw'>
              <p className="code_input">Décrivez vous en quelques lignes.</p>
            <textarea className="input_description"
            >
            
            </textarea>
          </div>
          </div>
          <div>
          <Link to="/younglanding">
            <input className="bnt_round connexion_bnt_round" type="submit" value="Créer un compte" />
          </Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Signup3;