const mountainOne = document.getElementById('mountain-1');
const mountainTwo = document.getElementById('mountain-2');
const scheduleOne = document.getElementById('schedule-1');
const scheduleTwo = document.getElementById('schedule-2');
const mountainBackground = document.getElementById('schedule');

mountainTwo.addEventListener('click', () => {
    
    mountainTwo.classList.add('selected')
    mountainTwo.classList.remove('unselected')
    mountainOne.classList.add('unselected')
    mountainOne.classList.remove('selected')
    scheduleOne.classList.add('hidden')
    scheduleTwo.classList.remove('hidden')
    mountainBackground.style.background = "url(../images/snowcap.jpg) center no-repeat";
    mountainBackground.style.backgroundSize = "cover"


})

mountainOne.addEventListener('click', () => {
    mountainOne.classList.add('selected')
    mountainOne.classList.remove('unselected')
    mountainTwo.classList.add('unselected')
    mountainTwo.classList.remove('selected')
    scheduleTwo.classList.add('hidden')
    scheduleOne.classList.remove('hidden')
    mountainBackground.style.background = "url(../images/skyMountain.jpg) center no-repeat"
    mountainBackground.style.backgroundSize = "cover"
})