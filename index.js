const button = document.getElementById('button');
const loaderDiv = document.getElementById('loaderDiv');
const companyList = document.getElementById('companyList');


const showLoader = () => {
    const loader = document.createElement('div');
    loader.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
    loaderDiv.appendChild(loader);
    setTimeout(() => {
        loaderDiv.removeChild(loader)
    }, 1500)
}

const presentTen = async () => {
    const response = await fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ');
    const data = await response.json();
    for (let i = 0; i < 10; i++) {
        const company = document.createElement('li');
        company.innerHTML = `<a href='/company.html?symbol=${data[i].symbol}'></a>`;
        company.style.listStyleType = 'none';
        company.innerText = `${data[i].name}, (${data[i].symbol})`;
        companyList.appendChild(company);
    }
}

button.addEventListener('click', showLoader);

button.addEventListener('click', () => {
    setTimeout(presentTen, 1000)
});