const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btnCat = document.getElementById('change-cat')
const catImage = document.getElementById('cat');

    const getCats = async () => {

        try{
            const data = await fetch(BASE_URL);
            const json = await data.json();
    
            return json.webpurl;
        }
        catch (e) {
            console.log(e.message);
        }
       
    };

    const loadImage = async () => {
        catImage.src = await getCats();
    };

    btnCat.addEventListener('click', loadImage);

    loadImage();