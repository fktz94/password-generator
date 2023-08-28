import { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';
import { PasswordContext } from '../context/PasswordContext';

export default function Password() {
  const { password } = useContext(PasswordContext);
  const [mouseOver, setMouseOver] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
    setClicked(false);
  };
  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
  };

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
        <div className="absolute flex top-1/2 -translate-y-1/2 right-3">
          <CopyToClipboard text={password}>
            <div className="relative">
              <MdOutlineContentCopy
                size="1.8rem"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                className="copy-icon"
                color="rgb(52 211 153)"
              />
              {mouseOver && (
                <span className="copy-text text-center absolute p-2 text-xs mt-[10px] w-max rounded -left-6 bg-neutral-600 text-emerald-300">
                  {!clicked ? 'Copy to clipboard!' : 'Copied!'}
                </span>
              )}
            </div>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
}
