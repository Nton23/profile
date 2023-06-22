const links = document.querySelectorAll('.link');
const panels = document.querySelectorAll('.panel')

// links menu event listener
links.forEach((link) => link.addEventListener('click', onLinkClick));

function onLinkClick(e) {

    //hide panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    //activate new tab and panel based on the target
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')

    console.log(document.getElementById('panels'));
    console.log(classString);
}
//<script src="js/script.js" defer></script>

const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        anchors.forEach(l => l.classList.remove('ficons'));

        anchor.classList.add('ficons');
});
});