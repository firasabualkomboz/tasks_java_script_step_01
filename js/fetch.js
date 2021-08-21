fetch('127.0.0.1:8000/api/posts')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('Errors'))