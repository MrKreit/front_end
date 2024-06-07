const productList = document.querySelector
('#productList')
async function getProducts() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    console.log(data);
    data.products.map(product => {
     const productCard = document.createElement('div');
     productCard.classList.add('productCard')
     const cardTitle = document.createElement('h4')
     cardTitle.textContent = product.title
     const cardImage = document.createElement('img')
     cardImage.src = product.images[0]
     product.images.map(el => {
        console.log(el);
        const newImage = document.createElement('img')
        newImage.src=el;
        productCard.append(newImage)
     })
     cardImage.classList.add('cardImage')
     productCard.append(cardTitle)
     productList.append(productCard)
    });
}
getProducts()