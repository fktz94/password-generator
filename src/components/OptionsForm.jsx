import { useContext } from 'react';
import CharacterLength from './CharacterLength';
import GenerateButton from './GenerateButton';
import IncludeListElement from './IncludeListElement';
import PassStrength from './PassStrength';
import { PasswordContext } from '../context/PasswordContext';

export default function OptionsForm() {
  const { error, includes, handleSubmit } = useContext(PasswordContext);

  const listElements = Object.keys(includes).map((item) => (
    <IncludeListElement key={item} name={item} />
  ));

  return (
    <form onSubmit={handleSubmit} className="px-6 py-4 flex flex-col gap-6 bg-neutral-800">
      <CharacterLength />
      <ul className="text-neutral-300">
        {error && (
          <span className="px-3 py-1 text-xs text-red-500 rounded-lg bg-neutral-900">{error}</span>
        )}
        {listElements}
      </ul>
      <PassStrength />
      <GenerateButton />
    </form>
  );
}
