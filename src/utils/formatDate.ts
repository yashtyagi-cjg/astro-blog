
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    // Define options for formatting
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    // Format the date using the options
    return date.toLocaleDateString('en-US', options);
  }
  