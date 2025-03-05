const photos =[ 
    https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNILinks to an external site.
    https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbsLinks to an external site.
    https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8ioLinks to an external site.
    https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQLinks to an external site.
    ];
    


const gallerySection = document.getElementById("gallery");


photos.forEach((url, index) => {
    let img = document.createElement("img");
    img.src = url;
    img.alt = `Image ${index + 1}`;
    img.height = 300;
    gallerySection.appendChild(img);
});