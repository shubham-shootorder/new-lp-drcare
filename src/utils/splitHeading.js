// utils/splitHeading.js

/**
 * Splits a text into an array of lines, each containing a specified number of words.
 *
 * @param {string} text - The heading text to split.
 * @param {number} wordsPerLine - Number of words per line.
 * @returns {string[]} - Array of text lines.
 */
export const splitHeading = (text, wordsPerLine = 3) => {
    if (!text) return [];
    
    const words = text.trim().split(/\s+/);
    const lines = [];
  
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
  
    return lines;
  };
  