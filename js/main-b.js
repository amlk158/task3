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
// After the loop print the HTML into <ul> element using innerHTML.


const myList = document.querySelector('ul');


fetch("./images.json").then(response => response.json()).then(data => {
    data.forEach(element => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <li>
                <figure>
                    <a href='img/original/${element.mediaThumb}'><img src="img/thumbs/${element.mediaUrl}"></a>
                    <figcaption>
                        <h3>${element.mediaTitle}</h3>
                    </figcaption>
                </figure>
            </li>
        `
        myList.appendChild(listItem);
    });
});




