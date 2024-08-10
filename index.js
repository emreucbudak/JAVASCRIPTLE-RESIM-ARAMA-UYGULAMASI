const form = document.querySelector("#form");
const input = document.querySelector("#input");
const sil = document.querySelector("#sil");
const imagelist = document.querySelector(".imagelist")
form.addEventListener("submit",denen);
function denen (e) {
  e.preventDefault();
  fetch(`https://api.unsplash.com/search/photos?query=${input.value}`, {
    method : "GET",
    headers : {
      Authorization: "Client-ID kPCuk8KBmuZaInD27aUX8XKVaRi7zw3RwHJ5p3K_uMc"  
    }
  })
  .then ((response) => {
    return response.json();
  })
  .then ((data) => {
    Array.from(data.results).forEach (elements => {
      console.log(elements.urls.small)
      const a = elements.urls.small;
      addElementsUI(a);
    })
  })
  .catch ((err) => {
    console.log(err)
  })
  input.value = "";
}
//          <div class="card" style="width: 18rem;">
// <img src="indir.png" class="card-img-top" alt="...">
// </div>
function addElementsUI(linked) {
  const div = document.createElement("div");
  div.className  = "card"
  div.style.width = "18rem";
  const img = document.createElement("img");
  img.src = linked
  img.className = "card-img-top"
  div.append(img)
  imagelist.append(div)
  console.log(imagelist)


}
sil.addEventListener("click",(e) => {
  e.preventDefault();
  Array.from(imagelist.children).forEach (elementals => {
    imagelist.removeChild(elementals);
  })
})