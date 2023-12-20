
const post = document.querySelector('.Cards')

const userId = localStorage.getItem('userId')
async function fitchBlog(){
    let id = JSON.parse(localStorage.getItem('id'))
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let filteredData = data.slice(data.length - 3, data.length);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlog()

console.log(userId);

function displayPosts(posts){
    let str ='';

    posts.map((post) =>{
        str +=`
        <a href="../pages/all-posts.html"
            <div class="card">
             <div class="iimg">
                    <img src="${post.image}" alt=""></img>
             </div>
              <div class="tt">
              <span>${post.author}</span>
              <h3>${post.title}</h3>
              <p>${post.description}</p>
              </div>
            </div>
            </a>
        `
    })
    post.innerHTML = str;
}
