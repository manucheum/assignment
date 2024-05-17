//fetch,catch,then usage ----->
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));



    async function getUser(id) {
        try {
          const response = await fetch(`https://api.example.com/users/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.status}`);
          }
          return await response.json();
        } catch (error) {
          console.error(error);

        }
      }
      
      getUser(123)
        .then(user => console.log(user))
        .catch(error => console.error(error));
      
//calculate average------>
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
    return sum / numbers.length; 
  }
  
  const myNumbers = [5, 8, 2, 10];
  const average = calculateAverage(myNumbers);
  console.log("The average is:", average); 
  



  
