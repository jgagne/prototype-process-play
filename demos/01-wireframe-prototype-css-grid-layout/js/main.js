// change layout

var select = document.querySelector('#select-layout');

select.onchange = function() {
  document.querySelector('#layout').className = 'grid-3-col ' + this.value;
};
