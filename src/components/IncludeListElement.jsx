import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function IncludeListElement({ name }) {
  const { handleIncludes, includes } = useContext(PasswordContext);
  return (
    <li>
      <label htmlFor={name} className="flex items-center">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={handleIncludes}
          checked={includes[name]}
          className="mr-4 my-2"
        />
        <span>Include {name.match(/case/) ? `${name} letters` : name}</span>
      </label>
    </li>
  );
}
