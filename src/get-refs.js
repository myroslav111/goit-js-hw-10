export default function getRefs() {
    return  {
        input: document.querySelector('#search-box'),
        list: document.querySelector('.country-list'),
        div: document.querySelector('.country-info'),
        gallery: document.querySelector('#gallery'),
        container: document.querySelector('.container'),
        mobGallery: document.querySelector('.pfon-gallery'),
    }
}