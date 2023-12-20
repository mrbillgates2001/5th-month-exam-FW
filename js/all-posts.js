const postsDiv = document.querySelector('.cards');
// const spanHeading = document.querySelector('.heading1 span');
// const MainBox = document.querySelector(".main")

async function getAllPosts() {
  try{
    let res = await fetch(`http://localhost:3000/posts`)
    let data = await res.json()
    renderData(data)
  } catch (error){
    console.log(error);
  }
}

getAllPosts()

// const userData = JSON.parse(localStorage.getItem("user"))

function renderData(userData){
    let str = '';

    userData.map((user) =>{
      str +=`
      <a href="./blog-post.html" onclick="getPost(${user.id})" 
        <div class='ccard'> 
          <div class="ccard_img">
            <img src="${user.image}" alt="" class="rasm">
          </div>
            <div class='rassm'> 
            <span class='adventure3'>${user.category}</span>
              <h2 class='sstep'>${user.title}</h2>
              <p class='title'>${user.description}</p>
              <h4 class='adventure1'>${user.author}</h4>
              <p class='adventure2'>${user.date}</p>

            </div>
        </div>
      </a>
      `
    })
    postsDiv.innerHTML = str;
}
// console.log(userData);
function getPost(id) {
  localStorage.setItem('userId', (id))
  console.log(id);
}





const searchInput = document.getElementById('search');
const informationList = document.getElementById('cards').getElementsByClassName('ccard');

function searching() {
  const searchingWord = searchInput.value.toLowerCase();

  for (let i = 0; i < informationList.length; i++) {
    const infos = informationList[i].textContent.toLowerCase();

    if (infos.indexOf(searchingWord) > -1) {
      informationList[i].style.display = '';
    } else {
      informationList[i].style.display = 'none';
    }
  }
}

searchInput.addEventListener('input', searching);