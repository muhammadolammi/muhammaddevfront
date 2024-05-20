const getPreviewContent = (content: string, wordLimit: number): string => {
    const cleanContent = content.replace(/<img\s+.*?>/g, '');

    const words = cleanContent.split(' ');
    if (words.length <= wordLimit) {
      return cleanContent;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  


  export {getPreviewContent}