import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function CharacterLength() {
  const { charLength, handleCharLength } = useContext(PasswordContext);

  // porcentaje específico para éste input range: min=5 y diferencia con el máximo=15 (para calcular porcentaje)
  const value = ((charLength - 5) * 100) / 15;
  // estilo para el porcentaje completado del input range
  const bgStyle = `linear-gradient(90deg, rgba(52, 211, 153, 0.8)  ${value}%, rgb(23, 23, 23) ${value}%)`;

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
        className="input-range text-4xl appearance-none outline-none h-1 rounded-full  text-emerald-400"
        style={{ background: bgStyle }}
        onChange={handleCharLength}
      />
    </>
  );
}
