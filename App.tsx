import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import { enhancePrompt, generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [rawPrompt, setRawPrompt] = useState<string>('');
  const [enhancedPrompt, setEnhancedPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!rawPrompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setImageUrl('');
    setEnhancedPrompt('');

    try {
      const enhanced = await enhancePrompt(rawPrompt);
      setEnhancedPrompt(enhanced);
      
      const generatedImageUrl = await generateImage(enhanced);
      setImageUrl(generatedImageUrl);

    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [rawPrompt]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-8">
          <PromptInput
            value={rawPrompt}
            onChange={(e) => setRawPrompt(e.target.value)}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-center">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}
          <ImageDisplay 
            imageUrl={imageUrl}
            isLoading={isLoading}
            enhancedPrompt={enhancedPrompt}
          />
        </main>
      </div>
       <footer className="w-full max-w-4xl mx-auto text-center py-8 mt-8 border-t border-slate-700">
        <p className="text-slate-500 text-sm">
          Powered by Gemini API. Built for creative exploration.
        </p>
      </footer>
    </div>
  );
};

export default App;