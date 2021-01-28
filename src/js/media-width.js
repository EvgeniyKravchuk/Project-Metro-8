(() => {
    const tabletMedia = window.matchMedia('(min-width: 768px)');
    const computerMedia = window.matchMedia('(min-width: 1280px)');
    const mobileMedia = window.matchMedia('(min-width: 320px)');

    const headerButtonHTML = `
        <button class="header__button" type="button">
        <a href="#" class="header__button-link link"
          >Консультация по телефону</a
        >
    `;

    const setPlaceForHeaderButton = (placeNumber, HTML) => {
        const headerButtonPlace = document.querySelector(`#header__button${placeNumber}`);

        headerButtonPlace.innerHTML = HTML;
    };

    mobileMedia.addEventListener('change', e => {
      if (e.matches) {
          console.log('mobile');
        setPlaceForHeaderButton(1, headerButtonHTML);
        setPlaceForHeaderButton(1, '');
      }
    });
    tabletMedia.addEventListener('change', e => {
      if (e.matches) {
          console.log('tablet');
        setPlaceForHeaderButton(2, headerButtonHTML);
        setPlaceForHeaderButton(1, '');
      }
    });
    computerMedia.addEventListener('change', e => {
      if (e.matches) {
          console.log('computer');
       setPlaceForHeaderButton(2, '');
       setPlaceForHeaderButton(1, headerButtonHTML);
      }
    });
})();