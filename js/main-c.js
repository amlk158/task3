// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const myList = document.querySelector("ul");

// setting attr

const showImages = async () => {
  const response = await fetch("./images.json");
  const data = await response.json();

  data.forEach(element => {
    const { mediaTitle, mediaThumb, mediaUrl } = element;
    console.log(mediaTitle, mediaThumb, mediaUrl);

    // creation elements
    const itemElement = document.createElement("li");
    const figureElement = document.createElement("figure");
    const linkElement = document.createElement("a");
    const imgElement = document.createElement("img");
    const figureCaption = document.createElement("figcaption");
    const titleElement = document.createElement("h3");

    titleElement.textContent = mediaTitle;
    figureCaption.appendChild(titleElement);

    imgElement.setAttribute("src", `img/thumbs/${mediaThumb}`);
    linkElement.setAttribute("href", `img/original/${mediaUrl}`);
    linkElement.appendChild(imgElement);

    figureElement.appendChild(linkElement);
    figureElement.appendChild(figureCaption);

    itemElement.appendChild(figureElement);
    myList.appendChild(itemElement);
  });
};

showImages();
