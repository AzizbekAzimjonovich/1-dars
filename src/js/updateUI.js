const cardsEl=document.querySelector('.cards')
export const createContries=(countries)=>{
    cardsEl.innerHTML=''
    countries.forEach((country) =>{
       const commonName = country.name.common 
       const population = country.population
       const region = country.region
       const capital = country.capital ? country.capital[0]:"No Capital"
       const flag = country.flags.svg

       const li=document.createElement("li")
       li.classList.add("cards__item")
       li.innerHTML=`
                    <a href="./about.html?country=${commonName}">
                        <img src=${flag} alt="aland-iceland-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">${commonName}</h3>
                            <p class="population">Population: <span>${population}</span></p>
                            <p class="region">Region: <span>${region}</span></p>
                            <p class="capital">Capital: <span>${capital}</span></p>
                        </div>
                    </a>
       `
        cardsEl.appendChild(li)
    })
}

const countryInfoEl=document.querySelector('.country-info')

export const createCountryInfo=(country) => {
    const{population,subregion,borders,capital, flags,name,region,tld,currencies,languages}=country

    const nativeName=Object.values(name.nativeName)[0].official
    const currency=Object.values(currencies)[0].name
    const language=Object.values(languages)

    countryInfoEl.innerHTML=`
    
    <img
    class="country-info__img"
    src=${flags.svg}
    alt="germany-flag"
    width="560"
    height="400"
  />
  <div class="country-info__content">
    <h2>${name.common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name
          <span>${nativeName}</span>
        </p>
        <p class="population">
          Population:
          <span>${population}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="name">
          Top Level Domain:
          <span>${tld}</span>
        </p>
        <p class="population">
          Currencies:
          <span>${currency}</span>
        </p>
        <p class="region">
          Languages:
          <span>${language}</span>
        </p>
      </li>
    </ul>

    <div class="country-info__borders">
      <h3>Border Countries:</h3>
      <a href="#">France</a>
      <a href="#">Belgium</a>
      <a href="#">Netherlands</a>
      <a href="#">Denmark</a>
      <a href="#">Poland</a>
      <a href="#">Szech</a>
      <a href="#">Austria</a>
      <a href="#">Switzerland</a>
      <a href="#">Luxembourg</a>
    </div>
  </div>

    `
}