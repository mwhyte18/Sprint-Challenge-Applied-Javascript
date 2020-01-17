// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
   
    const date = document.createElement('span');
    date.classList.add('date');
    header.appendChild(date);
    date.textContent = 'SMARCH 28, 2019';

    const titleH1 = document.createElement('h1');
    titleH1.textContent = 'Lambda Times';
    header.appendChild(titleH1);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    header.appendChild(temp);

    return header;
}

document.querySelector('.header-container').appendChild(Header());