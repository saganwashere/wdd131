document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('#menuButton');
    const navMenu = document.querySelector('#navMenu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            menuButton.textContent = isOpen ? '✖' : '☰';
        });
    }

    const navLinks = document.querySelectorAll('#navMenu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.textContent.toLowerCase();

            switch (filter) {
                case 'home':
                    displayTemples(temples);
                    break;
                case 'old':
                    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
                    break;
                case 'new':
                    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
                    break;
                case 'large':
                    displayTemples(temples.filter(t => t.area > 90000));
                    break;
                case 'small':
                    displayTemples(temples.filter(t => t.area < 10000));
                    break;
                default:
                    displayTemples(temples);
            }
        });
    });


    displayTemples(temples);
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52590,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    }
]



function displayTemples(templeArray) {
    const templeGrid = document.querySelector('.temple-grid');
    templeGrid.innerHTML = '';

    templeArray.forEach(temple => {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area.toLocaleString()} sq ft
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        templeGrid.appendChild(figure);
    });
}