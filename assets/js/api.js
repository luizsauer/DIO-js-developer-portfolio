
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/luizsauer/DIO-js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url) //retorna um fetch da url
    return await fetching.json() //converte em json
}