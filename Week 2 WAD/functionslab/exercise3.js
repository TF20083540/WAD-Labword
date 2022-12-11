fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const finalResult = json.filter(job => job.completed === false).map(job => job.userId && job.title)
    console.log(finalResult);

    

})
  .catch(function(err) { 
    console.log(err);
  });

