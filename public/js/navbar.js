function newNavbarItem(text, url) {
  const itemLink = document.createElement('a');
  itemLink.className = 'nav-item nav-link';
  itemLink.innerHTML = text;
  itemLink.href = url;

  return itemLink
}

function searchDOMObject(placeholder, enter_key) {
  const newSearchDiv = document.createElement('div');
  newSearchiv.className = 'input-group my-3';

  const newSearchContent = document.createElement('input');
  newSearchContent.setAttribute('type', 'text');
  newSearchContent.setAttribute('placeholder', placeholder);
  newSearchContent.className = 'form-control';
  newSearchContent.setAttribute('id', 'story-content-input')
  newStoryDiv.appendChild(newSearchContent);

  const newSearchButtonDiv = document.createElement('div');
  newSearchButtonDiv.className = 'input-group-append';
  newSearchDiv.appendChild(newStoryButtonDiv);

  const newSearchSubmit = document.createElement('button');
  newSearchSubmit.innerHTML = enter_key;
  newSearchSubmit.className = 'btn btn-outline-primary';
  newSearchSubmit.addEventListener('click', submitStoryHandler);
  newStoryButtonDiv.appendChild(newSearchSubmit);

  return newStoryDiv;
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('nav-item-container');
  const navbrand = document.getElementById('nav-brand');
  document.getElementById('nav-search-container').appendChild(newStoryDOMObject("Search Blackboard", "Search"));
  navbrand.appendChild(newNavbarItem('Blackboard','/'));

  if (user._id !== undefined) {
    navbarDiv.appendChild(newNavbarItem('Profile', '/u/profile?'+user._id));
    navbarDiv.appendChild(newNavbarItem('Logout', '/logout'));
  } else {
    navbarDiv.appendChild(newNavbarItem('Login', '/auth/google'));
  }
}
