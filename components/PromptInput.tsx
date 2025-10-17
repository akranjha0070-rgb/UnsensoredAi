import React from 'react';
import { SparklesIcon, LoaderIcon } from './icons';

interface PromptInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 shadow-lg focus-within:ring-2 focus-within:ring-violet-500 transition-all duration-300">
      <div className="relative">
        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="A raw prompt to be enhanced... e.g., 'a lone warrior'"
          className="w-full bg-transparent border-0 rounded-lg p-4 text-slate-200 placeholder-slate-500 focus:ring-0 resize-none min-h-[120px]"
          disabled={isLoading}
        />
        <div className="absolute bottom-2 right-2">
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-violet-600 rounded-lg shadow-md hover:bg-violet-700 disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-violet-500 transition-colors duration-200"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="animate-spin h-5 w-5" />
                Generating...
              </>
            ) : (
              <>
                <SparklesIcon className="h-5 w-5" />
                Generate
              </>
            )}
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2 text-right px-4">
        Tip: Press Cmd/Ctrl + Enter to submit
      </p>
    </div>
  );
};

export default PromptInput;