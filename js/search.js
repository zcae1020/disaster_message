input = document.getElementById("searchbar");



function search() {
  input.submit();
}

fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response)
);