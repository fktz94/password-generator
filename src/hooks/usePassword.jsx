import { useState } from 'react';
import generatePass from '../utilities/generatePass';
import checkPassStrength from '../utilities/checkPassStrength';

export default function usePassword() {
  const [password, setPassword] = useState('');
  const handlePassword = (value) => {
    setPassword(value);
  };

  const [charLength, setCharLength] = useState(10);
  const handleCharLength = (e) => {
    setCharLength(+e.target.value);
  };

  const [error, setError] = useState('');

  const [includes, setIncludes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const handleIncludes = (e) => {
    if (error) setError('');
    const {
      target: { name }
    } = e;
    setIncludes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const [passStrength, setPassStrength] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) setError('');
    const selectedOptions = Object.entries(includes)
      .map((item) => (item[1] ? item[0] : false))
      .filter((item) => item);
    try {
      const pass = generatePass(selectedOptions, charLength);
      setPassword(pass);
      const passStgth = checkPassStrength(pass, selectedOptions);
      setPassStrength(passStgth);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    charLength,
    error,
    handleCharLength,
    handleIncludes,
    handlePassword,
    handleSubmit,
    includes,
    passStrength,
    password
  };
}
