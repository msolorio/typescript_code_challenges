/*
Write a function filter_long_words that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

Example:

filter_long_words("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']
*/

// Given a sentence, return all words longer than the limit
function getLongWords(sentence: string, limit: number): string[] {
  // Get array of words
  const allWords: string[] = sentence.split(' ');
  // filter for words w/length greater than limit
  return allWords.filter(word => word.length > limit);
}
