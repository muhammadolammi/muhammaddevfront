

const fetchData = async <T,>(url: string): Promise<T> => {
    const response = await fetch(url);
    // console.log(url)
    // console.log("response status from fetchData func is: " + response.status)
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json();
      const returningData:T = data.data
      return returningData;
    } else {
      throw new Error('Unexpected content type');
    }
  };

export { fetchData}