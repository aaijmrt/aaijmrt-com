'use client'; // This component handles state and browser-specific rendering

import React, { useState } from 'react';

// Type definition for the props expected by the client component
interface ConfigFile {
  title: string;
  description: string;
  content: string;
  language: string;
}

interface ConfigDisplayProps {
  loadedConfigFiles: ConfigFile[];
}

// Component to display a single config file with expand/collapse
function ConfigFileDisplay({ title, description, content, language }: ConfigFile) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content.trim());
      setIsCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const lineCount = content.split('\n').length;
  const needsExpansion = lineCount > 15;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3 text-blue-400">{title}</h2>
      <p className="text-sm text-slate-400 mb-4">
        {description}
      </p>
      <div className={`relative bg-slate-800 rounded-lg shadow-md overflow-hidden ${!isExpanded && needsExpansion ? 'max-h-60' : ''}`}>
        {/* Copy button */}
        <button 
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded px-2 py-1 text-xs flex items-center transition-colors z-10"
          aria-label="Copy to clipboard"
        >
          {isCopied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </>
          )}
        </button>

        <pre className="p-4 text-slate-300 text-sm">
          <code className={`language-${language}`}>
            {content.trim()}
          </code>
        </pre>
        {!isExpanded && needsExpansion && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none"></div>
        )}
      </div>
      {needsExpansion && (
        <button
          onClick={toggleExpansion}
          className="mt-2 px-3 py-1 text-sm text-blue-400 bg-slate-700 hover:bg-slate-600 rounded transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

// The main client component that receives data and maps over it
export default function ConfigDisplay({ loadedConfigFiles }: ConfigDisplayProps) {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6 text-white">My Configuration</h1>

      {loadedConfigFiles.map((file, index) => (
        <ConfigFileDisplay
          key={index}
          title={file.title}
          description={file.description}
          content={file.content}
          language={file.language}
        />
      ))}
    </div>
  );
} 