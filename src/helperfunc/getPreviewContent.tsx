


const getPreviewContent = (content: string, wordLimit: number): string => {
  // Create a temporary DOM element to parse the HTML content
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Remove all image tags from the parsed HTML
  const images = tempDiv.querySelectorAll('img');
  images.forEach(img => img.remove());

  // Get the text content from the temporary div, which strips out all HTML tags
  const cleanText = tempDiv.textContent || '';

  // Split the clean text into words
  const words = cleanText.split(' ');

  // If the word count is less than or equal to the limit, return the clean text
  if (words.length <= wordLimit) {
    return cleanText;
  }

  // Otherwise, return the truncated content with an ellipsis
  return words.slice(0, wordLimit).join(' ') + '...';
};

export { getPreviewContent };
