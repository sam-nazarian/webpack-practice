import logo from './logo.svg'; //gives the url for that item

function component() {
  const m = document.createElement('main');
  const p = document.createElement('p');
  const img = document.createElement('img');
  m.append(p);
  p.append(img);
  img.src = logo; //url of the image
  img.alt = 'smaple logo';

  return m;
}

export default component;
