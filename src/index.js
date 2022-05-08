import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import  {  Notify  }  from  'notiflix/build/notiflix-notify-aio' ; 
import debounce from 'lodash.debounce'
import getRefs from './get-refs'
import hbsTemplateItem from './tmplates/item-countries.hbs'
import hbsTemplateList from './tmplates/list-countries.hbs'


const DEBOUNCE_DELAY = 300;
const refs = getRefs()

// сщообщение информация
function info() {
    Notify.info("Too many matches found. Please enter a more specific name.");
}

function err() {
    Notify.failure('Oops, there is no country with that name');
}

// подписываем инпут
refs.input.addEventListener('input', debounce(onInputIn, DEBOUNCE_DELAY))

// фун. запуск фетч при инпуте
function onInputIn(event) {
    if(event.target.value === ''){
        cleanDomItem()
        cleanDomList()
        return
    }
    const nameCountries = event.target.value.trim()

    fetchCountries(nameCountries)
    .then(renderCountryList)
    .catch(error => {
        if(Number(error.message) === 404){
            return err()
        }
        return info()
    })
} 

// фун. рисуем интерфейс list
function renderCountryList(countrys) {
    if(countrys.length > 1){
        if(countrys.length > 10){
            reuturn
        }
        cleanDomItem()
        const markupList = hbsTemplateList(countrys)
        refs.list.innerHTML = markupList
        return 
    }
    renderCountryCard(countrys)
}

// фун. рисуем интерфейс div
function renderCountryCard(country){
        cleanDomList()  
        const markupItem = hbsTemplateItem(country)
        refs.div.innerHTML = markupItem
}

// фун. очистки дома list
function cleanDomList(){
    refs.list.innerHTML = ''
}

// фун. очистки дома div
function cleanDomItem(){
    refs.div.innerHTML = ''
}





