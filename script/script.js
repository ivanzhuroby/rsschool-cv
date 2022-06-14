const getNavigation = document.querySelector(".navigation");
const getNavigationMenu = Array.from(getNavigation.children);
const getSection = Array.from(document.getElementsByTagName("section"));

getNavigationMenu.forEach((block, index) => block.addEventListener('click', () => {
    for (let key=0; key<getNavigationMenu.length; key++) {
        getSection[key].classList.remove('current')
    }

    getSection[index].classList.add('current');
}))