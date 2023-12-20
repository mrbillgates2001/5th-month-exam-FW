const getBlog = document.querySelector('.cards')

const userId = localStorage.getItem('userId')
async function fitchBlock(){
  try {
    let str = await fetch("http://localhost:3000/posts");
    let data = await str.json();
    let filterData = data.filter((bg) => bg.id == userId);
    displayTodos(filterData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock()


function displayTodos(blogs){
    let str ='';

    blogs.map((post) =>{
        str +=`
            <div class="card">
              <img src="${post.image}" alt="">
              <div class="card_text">
                 <h3>${post.author}</h3>
                 <span>${post.date}</span>
                 <h1>${post.title}</h1>
                 <h4>${post.category}</h4>
                 <p>${post.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                 <p>${post.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              </div>
            </div>
        `
    })
    getBlog.innerHTML = str;
}