import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function Password() {
  const { password } = useContext(PasswordContext);
  return (
    <input
      type="text"
      value={password}
      readOnly
      placeholder="P4$5W0rD!"
      className="px-6 py-4 text-3xl font-bold tracking-wider outline-none text-neutral-400 bg-neutral-800"
    />
  );
}
