import { useRef, useState } from 'react';

export function Code({ children }: { children: string }): React.ReactNode {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    copyTimeoutRef.current = timeout;
  };

  return (
    <code className="relative block m-2 p-4 border-1 border-stone-600 bg-stone-800 rounded-md pr-8">
      <button
        className="absolute top-0 right-0 font-sans w-18 p-0 flex justify-center"
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      {children}
    </code>
  );
}
