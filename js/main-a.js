// Create function 'showImages' which
// adds the loaded HTML content to <ul> element



var myList = document.querySelector('ul');

// async await syntax ES7
const showImages = async () => {
  const response = await fetch("./images.html");
  const data = await response.text()
  myList.innerHTML = data;
}

showImages();

