import { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';
import { PasswordContext } from '../context/PasswordContext';

export default function Password() {
  const { password } = useContext(PasswordContext);
  return (
    <div className="relative">
      <input
        type="text"
        value={password}
        readOnly
        placeholder="P4$5W0rD!"
        className="px-6 py-4 text-3xl w-full font-bold tracking-wider outline-none text-neutral-400 bg-neutral-800"
      />
      {password && (
        <div className="absolute flex top-1/2 -translate-y-1/2 right-3 hover:opacity-50 active:opacity-10">
          <CopyToClipboard text={password}>
            <button type="button">
              <MdOutlineContentCopy size="1.8rem" color="rgb(52 211 153)" />
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
}
