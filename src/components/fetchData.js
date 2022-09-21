

export default function fetchData(search){
   const url=`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`;
  return fetch( url)
    .then(res => res.json())
    .catch(err =>console.log(err))

 }