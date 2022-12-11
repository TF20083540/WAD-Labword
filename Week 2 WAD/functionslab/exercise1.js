fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((job, index) =>{
        console.log(`${index} - ${job.completed}`);
        return job.completed === true;
     }) //null // Complete this code

     console.log(completed);

     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });

