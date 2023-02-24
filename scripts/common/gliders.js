// Her har vi lagt settings for vores "mediaGlider", den carrusel/glider som benyttes på produkt detalje siden til ekstra billeder.
// Fordi vi gerne vil kunne
export const mediaGlider = () => {

    const carrousel = document.querySelector('.product-details-media');

    if(carrousel)
    {
        const gliderElement = carrousel.querySelector('.glider');

        new Glider(gliderElement, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: true,
            dots: '.dots',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

    }
}