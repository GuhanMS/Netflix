const mainTab = document.querySelectorAll('.mainTab');
const mainContent = document.querySelectorAll(".mainContent");
console.log(mainContent);


function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('current');
    const contents = document.querySelector(`#${this.id}-cont`);
    contents.classList.add('show');
}
function removeBorder() {
    mainTab.forEach(items => items.classList.remove("current"));
}
// console.log([...content]);

function removeShow() {
    mainContent.forEach(items => items.classList.remove('show'));
}
//since tab is array like object so first convert it to array then we use forEach and addEventListener
//forEach is used to more than one item
mainTab.forEach(items => items.addEventListener("click", selectItem));