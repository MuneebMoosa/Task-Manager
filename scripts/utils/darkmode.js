// darkmode function
export function darkMode(togglebutton){

  if (localStorage.getItem('darkmode') === 'enabled') {
    document.body.classList.add('dark-mode-colors');
  }

togglebutton.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode-colors')

    if(document.body.classList.contains('dark-mode-colors')){
      localStorage.setItem('darkmode' , 'enabled');
    }else{
      localStorage.setItem('darkmode' , 'disabled');
    }
});
}