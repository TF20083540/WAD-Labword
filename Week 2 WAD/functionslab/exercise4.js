fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce(function(count, item){
      return count + (item['completed'] === true ? 1:0)
     }, 0); //null // Complete this code
     

     console.log(completed);

  })
  .catch(function(err) { 
    console.log(err);
  });

