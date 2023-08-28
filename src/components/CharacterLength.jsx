import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function CharacterLength() {
  const { charLength, handleCharLength } = useContext(PasswordContext);
  return (
    <>
      <div className="flex justify-between">
        <span className="self-center text-neutral-300">Character length</span>
        <span className="text-4xl text-emerald-400">{charLength}</span>
      </div>
      <input
        type="range"
        min={5}
        max={20}
        value={charLength}
        className="text-4xl appearance-none outline-none h-1 rounded-full bg-neutral-900 text-emerald-400"
        onChange={handleCharLength}
      />
    </>
  );
}
