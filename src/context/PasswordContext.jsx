import { createContext, useMemo } from 'react';
import usePassword from '../hooks/usePassword';

export const PasswordContext = createContext();

export function PasswordProvider({ children }) {
  const {
    charLength,
    error,
    handleCharLength,
    handleIncludes,
    handlePassword,
    handleSubmit,
    includes,
    passStrength,
    password
  } = usePassword();

  const value = useMemo(() => {
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
  }, [
    charLength,
    error,
    handleCharLength,
    handleIncludes,
    handlePassword,
    handleSubmit,
    includes,
    passStrength,
    password
  ]);

  return <PasswordContext.Provider value={value}>{children}</PasswordContext.Provider>;
}
