import Password from './components/Password';
import OptionsForm from './components/OptionsForm';
import { PasswordProvider } from './context/PasswordContext';

export default function App() {
  return (
    <PasswordProvider>
      <div className="flex flex-col gap-6 items-center justify-center w-full h-screen font-mono bg-neutral-950">
        <h2 className="text-xl text-neutral-400">Password Generator</h2>
        <div className="min-w-[440px] flex flex-col gap-6">
          <Password />
          <OptionsForm />
        </div>
      </div>
    </PasswordProvider>
  );
}
