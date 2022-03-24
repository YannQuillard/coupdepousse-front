import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postUser } from "../../api";
import './Signup.css';

export type SignupState = {
  fristName: string;
  lastName: string;
  address: string;
  postalCode: number;
  city: string;
  phone: string;
  birthday: Date;
}

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [freeworker, setFreeworker] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loggedUser = await postUser({ firstName, lastName, phone, birthday, freeworker, address, postalCode, city, country});
      console.log(loggedUser)
      navigate('')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="signup">
      <div className="container">
        <h1 className="title title_white">Inscription</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input">

          <div className='input_first_raw'>
            <input
              type="text"
              className="input_content"
              placeholder="Prénom"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              type="text"
              className="input_content"
              placeholder="Pays"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
            <input
              type="text"
              className="input_content"
              placeholder="Adresse"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <input
              type="text"
              className="input_content"
              placeholder="Code postal"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
            <input
              type="text"
              className="input_content"
              placeholder="Téléphone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className='input_second_raw'>
            <input
                type="text"
                className="input_content"
                placeholder="Nom"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <input
              type="date"
              className="input_content"
              placeholder="Date de naissance"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
            <input
              type="text"
              className="input_content"
              placeholder="Ville"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <input 
              type="hidden" 
              value="false"
              onChange={(event) => setFreeworker(() => Boolean(event.target.value))}
            />
          </div>
          </div>
          <div className="bnt_round">
            <input type="submit" value="Créer un compte" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default Signup;