import  {  Notify  }  from  'notiflix/build/notiflix-notify-aio' ; 
const API_REST__COUNTRIES = 'https://restcountries.com/v2/'
const NAME = 'name/'
const all = 'all'
const country = 'name'
const capital = 'capital'
const population = 'population'
const flags = 'flags'
const lang = 'languages'

function err() {
    Notify.failure('Oops, there is no country with that name');
}

// фун. которая делает HTTP-запрос на ресурс name и возвращает промис с массивом стран - результатом запроса.
function fetchCountries(name) {
    return fetch(`${API_REST__COUNTRIES}${NAME}${name}?fields=${country},${capital},${population},${flags},${lang}`).then(respons => {
        if(!respons.ok){
            return err        }
        return respons.json()
    })
}

// именованный экспорт
export {fetchCountries}