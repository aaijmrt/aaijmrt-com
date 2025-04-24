// This is now a Server Component - no 'use client'
import React from 'react';
import fs from 'fs/promises'; // Standard Node.js imports are fine here
import path from 'path';
import ConfigDisplay from './config-display'; // Import the Client Component

// Define metadata for configuration files
const configFilesMetadata = [
  {
    title: ".zshrc Configuration",
    description: "Below is my general Zsh configuration. Note that specific paths have been redacted for privacy. You may need to adjust paths based on your own system and installations.",
    filename: 'zshrc.txt',
    language: 'zsh'
  },
  {
    title: ".starship.toml",
    description: "Starship prompt configuration.",
    filename: 'starship.toml.txt',
    language: 'toml'
  }
  // Add metadata for more config files here in the future
];

// Fetch data on the server
async function loadConfigFiles() {
  return Promise.all(
    configFilesMetadata.map(async (meta) => {
      const filePath = path.join(process.cwd(), 'public/configs', meta.filename);
      let content = `// File not found: ${meta.filename}`;
      try {
        content = await fs.readFile(filePath, 'utf-8');
      } catch (error) {
        // In production, it might be better to not log errors to the console
        // or use a proper logging service.
        // console.error(`Error reading config file ${meta.filename}:`, error);
      }
      return {
        ...meta,
        content: content,
      };
    })
  );
}

// Main page component (Server Component)
export default async function ConfigPage() {
  const loadedConfigFiles = await loadConfigFiles();

  return (
    // Render the Client Component, passing the loaded data as props
    <ConfigDisplay loadedConfigFiles={loadedConfigFiles} />
  );
}
 