var urlsearchparam = new URLSearchParams(window.location.search)
var score = urlsearchparam.get('score')
sessionStorage.setItem('score', score)
if (sessionStorage.getItem('score') > localStorage.getItem('highscore')) {
    localStorage.setItem('highscore', score)
}
document.getElementById('score').innerHTML=" " + sessionStorage.getItem('score')
document.getElementById('highscore').innerHTML= " " + localStorage.getItem('highscore')