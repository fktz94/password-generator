import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function IncludeListElement({ name }) {
  const { handleIncludes, includes } = useContext(PasswordContext);
  const checked = includes[name];
  return (
    <li>
      <label htmlFor={name} className="flex items-center relative">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={handleIncludes}
          checked={checked}
          className={`mr-4 my-2 appearance-none w-4 h-4 border cursor-pointer border-neutral-950 ${
            checked ? 'input-checked bg-neutral-900' : 'bg-neutral-400'
          } `}
        />
        <span>Include {name.match(/case/) ? `${name} letters` : name}</span>
      </label>
    </li>
  );
}
