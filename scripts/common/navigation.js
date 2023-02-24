import service from "../services/services.js";

export const navigation = () => {

    const navBtn = document.querySelector('.navigation-bar-action');
    const subNavigation = document.querySelector('.sub-navigation');
    const navList = document.querySelector('.nav-list');

    /* 
    
        const url = Indeholder en URL over den side vi er på lige nu. feks http://127.0.0.1:5500/index.html eller http://127.0.0.1:5500/pages/page.html
        Når vi benytter url er det fordi det giver os muligheden for at udtrække "pathname" - dette sikre at vi får præcis den del af URL vi ønsker.

        Feks. new URL('http://127.0.0.1:5500/pages/page.html').pathname vil aflevere '/pages/page.html'.

    */

    const url = new URL(location.href);

    /* 
    
        Henter menupunkter fra service. Og skriver dem i dom elementet
    
    */

    const navItemsList = service.getNavigation.navList;
    navList.innerHTML = '';
    navItemsList.forEach( (navItem) => {
        
        navList.innerHTML += `<li class="nav-item"><a href="${navItem.link}"><i class="fa fa-fw fa-${navItem.icon}"></i>${navItem.title}</a></li>`

    })

    // EFTER vi har skrevet vores elemnter i HTML´en - så kan vi lave en reference til menu-punkterne.
    const navItems = document.querySelectorAll('.nav-item a');

    /* 
    
        Løber over alle nav items.
        Hvis vi har samme pathname i vores href som i vores url.

        Så tilføjer vi klassen active.
    
    */

    navItems.forEach( (navItem) => {

        // Vi omdanner vores href til en URL feks - new URL('/products/') det giver os mulighed for at spørge om pathname, 
        let navItemUrl = new URL(navItem.href);
  
        // Vi sammenligner vores pathnames for at undersøge om vi er på samme side/location
        if(url.pathname.includes(navItemUrl.pathname) && navItemUrl.pathname !== '/') {

            navItem.parentNode.classList.add('active');
            
        } else if (navItemUrl.pathname === url.pathname) {

            navItem.parentNode.classList.add('active');
        }

    })
 
    /* 
    
        Tilføjer et 'Click' event til "burger" knappen.
    
    */
    if(subNavigation && navBtn)
    {
        navBtn.addEventListener('click', () => {
            subNavigation.classList.toggle('active');
        });
    }
 
};