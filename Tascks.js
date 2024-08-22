//Task 01: Simple iteration with delays.
async function iterateWithAsyncAwait(arr) {
    for (let value of arr) {
      await new Promise(resolve => setTimeout(resolve, 1000));  // 1 second delay
      console.log(value);
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  //Task 03: Error handling in asynchronous operations.

  async function awaitCall() {
    try {
      const data = await simulateApiCall();
      console.log("Data fetched:", data);
    } catch (error) {
      console.error("Error fetching data. Please try again later.");
    }
  }
  
 
  function simulateApiCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;  // 70% chance of success
        success ? resolve("Fetched Data") : reject("API Error");
      }, 1000);
    });
  }
  

  awaitCall();
  //Task 05: Performing concurrent asynchronous operations and handling their results.


  async function parallelCalls(urls) {
    try {
      const fetchPromises = urls.map(url => fetchData(url));
      const results = await Promise.all(fetchPromises);
      console.log("Responses from all URLs:", results);
    } catch (error) {
      console.error("Error fetching data from one or more URLs:", error);
    }
  }
  
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.2; 
        success ? resolve(`Data from ${url}`) : reject(`Failed to fetch ${url}`);
      }, 1000);
    });
  }
  
  const urls = ['https://api.example.com/1', 'https://api.example.com/2', 'https://api.example.com/3'];
  parallelCalls(urls);
  