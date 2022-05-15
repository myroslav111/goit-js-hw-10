import axios from "axios"
const API_REST__COUNTRIES = 'https://restcountries.com/v2/'
const NAME = 'name/'
const all = 'all'
const country = 'name'
const capital = 'capital'
const population = 'population'
const flags = 'flags'
const lang = 'languages'


// фун. которая делает HTTP-запрос на ресурс name и возвращает промис с массивом стран - результатом запроса.
function fetchCountries(name) {
    return fetch(`${API_REST__COUNTRIES}${NAME}${name}?fields=${country},${capital},${population},${flags},${lang}`).then(respons => {
        if(!respons.ok){
            console.log(respons.status);

            throw new Error(respons.status)
        }
        return respons.json()
    })
}


const page = (max, min) => Math.floor(Math.random()*(max-min+1)+min);

async function getPhoto(name) {
    
    
      const response = await axios.get(`https://pixabay.com/api/?key=23788919-1e868a4f1ae72234cc449d190&q=${name}&image_type=photo&category=places&page=${page(10, 1)}&per_page=5&orientation=horizontal&orientation=true&min_width=900&min_height=650`);
      
    return response
  }




// именованный экспорт
export {fetchCountries, getPhoto}


