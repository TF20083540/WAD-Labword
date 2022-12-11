fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const finalResult = json.filter(job => 
        job.completed === false).map(job => 
            job.userId && job.title)
    console.log(finalResult);

    const completed = json.reduce(function(job, count){
        return job.userId + job.title + (count['completed'] === true ? 1:0)
       }, 0); //null // Complete this code
    
       console.log(completed);

    })
  .catch(function(err) { 
    console.log(err);
  });

