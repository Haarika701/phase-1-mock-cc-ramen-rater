        //create a fetch url
        //declare url
        const BASE_URL = "http://localhost:3000/ramens";

        fetch("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then((allRamens) => {
    allRamens.forEach((ramen) => {

            const image = document.createElement('img');
            //console.log(imgContainer);
            image.src = ramen.image;
            //console.log(ramen.image);
            let ramenMenu = document.getElementById('ramen-menu');
            ramenMenu.append(image);
            console.log(ramenMenu);
            image.addEventListener("click",() => {
                const ramenDetail = document.getElementsByClassName('detail-image')[0]
                
                ramenDetail.src = ramen.image;
                const ramenName = document.querySelector("h2.name");
                ramenName.textContent = ramen.name
                const ramenRestaurant = document.querySelector("h3.restaurant")
                ramenRestaurant.textContent = ramen.restaurant
                //console.log(ramenMenu);
                const detailRating = document.getElementById('rating-display')
            detailRating.textContent = ramen.rating

            const detailComment = document.getElementById('comment-display')
            detailComment.textContent = ramen.comment
            })
        });
    })

    const form = document.getElementById('new-ramen')
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const newName = event.target["new-name"].value
  const newRestaurant = event.target["new-restaurant"].value
  const newImage = event.target["new-image"].value
  const newRating = event.target["new-rating"].value
  const newComment = event.target["new-comment"].value

  const image = document.createElement('img')
  image.src = newImage

  const imagesContainer = document.getElementById('ramen-menu')
  imagesContainer.append(image)

  image.addEventListener("click", () => {
    const detailImage = document.querySelector('img.detail-image')
    detailImage.src = newImage
  })
})