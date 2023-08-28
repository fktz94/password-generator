import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function PassStrength() {
  const categories = ['too weak', 'weak', 'medium', 'strong'];
  const { passStrength } = useContext(PasswordContext);

  let categoryColor;
  switch (passStrength) {
    case 'too weak':
      categoryColor = 'bg-red-500';
      break;
    case 'weak':
      categoryColor = 'bg-orange-500';
      break;
    case 'medium':
      categoryColor = 'bg-amber-500';
      break;
    case 'strong':
      categoryColor = 'bg-green-500';
      break;
    default:
      categoryColor = 'bg-transparent';
      break;
  }

  const categoryIndex = categories.findIndex((item) => item === passStrength);
  const categoriesColorBox = categories.map((el, i) => {
    const bgColor = categoryIndex >= i ? categoryColor : 'bg-transparent';
    return <span key={el} className={`border w-[1.5ch] border-neutral-300 ${bgColor}`} />;
  });

  return (
    <div className="px-5 py-4 flex justify-between text-lg bg-neutral-900">
      <span className="font-semibold text-neutral-600">STRENGTH</span>
      <span className="flex gap-3 text-neutral-300">
        {passStrength.toUpperCase()}
        <div className="flex gap-2">{categoriesColorBox}</div>
      </span>
    </div>
  );
}
