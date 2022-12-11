fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const jsonContents = json.filter((job, index) =>{
        return job;
     }) //null // Complete this code

     console.log(jsonContents);

     const newArr = jsonContents.map(myFunction)

     console.log(newArr);



  })
  .catch(function(err) { 
    console.log(err);
  });

function myFunction(job){
    return job.title;
}