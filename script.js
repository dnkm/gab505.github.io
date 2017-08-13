/* progress bar*/
window.onload = function(){
    let sectionSkillset = document.querySelector("#section_skillSet")
    let wp = new Waypoint2(sectionSkillset, 50, onHit);
}

function onHit(){
    console.log("HIT");
    let pa = document.querySelectorAll('#section_skillSet progress')
    pa.forEach(p => {
        animateProgress(p);
    })
}

function animateProgress(p){
    if(p.dataset.originalValue > p.value){
        p.value++;
        requestAnimationFrame(() => {animateProgress(p)});
    }
}

addEventListener('load', () => {
    document.querySelector(".jumbotron").style.height = (window.innerHeight - 72) + 'px';
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");


    let $testImg = document.getElementById('testImg');

    var waypoint = new Waypoint({
        element: $testImg,
        handler: function (direction) {
            if (direction === 'down') {
                console.log('triggered');
                $testImg.classList.add('rotated');
            }
        },
        offset: window.innerHeight - 100
    })

    var waypoint = new Waypoint({
        element: $testImg,
        handler: function (direction) {
            if (direction === 'up') {
                console.log('triggered');
                $testImg.classList.remove('rotated');
            }
        },
        offset: window.innerHeight - 250
    })

    

});

function scroll(){
    let dist = 0;
    let scrollDown = setInterval(function(){
         window.scrollBy(0, 2);
         dist+=2;
            if(dist == window.innerHeight){
            clearInterval(scrollDown);
        }
    }, 2);  
}

