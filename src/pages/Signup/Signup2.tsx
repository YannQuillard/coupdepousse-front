import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Signup.css';
import Header from '../../components/Header/Header';
import { postPhoneValidation } from "../../api";

interface State {
  firstName: string;
  phone: string;
}

const Signup2 = () => {
  const { state } = useLocation();

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
      const loggedUser = await postPhoneValidation({ phone, code});
      setMesssage('Success Login !')
      navigate('/signup3', {state: {phone}});
    } catch (error) {
      setMesssage('Erreur lors de l\'inscription ! Vérifier tous les champs !')
    }
  }

  return (
    <div className="signup">
      <Header color="White"/>
      <div className="container">
        <h1 className="title title_white">Inscription</h1>
        {!!message &&
          <p className='error_text'>{message}</p>
        }
        <form onSubmit={handleFormSubmit}>
          <div className="input">

          <div className='input_first_raw'>
              <p className="code_input">Saisir le numéro envoyé par SMS</p>
            <input
              type="text"
              className="input_content"
              placeholder="Code de sécurité"
              value={code}
              onChange={(event) => setCode(() => parseInt(event.target.value))}
            />
          </div>
          </div>
          <div>
            <input className="bnt_round connexion_bnt_round" type="submit" value="Suivant" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default Signup2;