const $portfolio = document.querySelector('.sec-portfolio-js');
const $modalImgPortfolio = document.querySelector('.img-modal-js');
$portfolio.addEventListener('click',(e) => {
    if (e.target.classList.contains('img-btn-modal-js')) {
        //src
        const urlImg = e.target.attributes[0].nodeValue;
        //add modal
        $modalImgPortfolio.src = urlImg;
    }
});