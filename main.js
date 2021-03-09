Vue.config.devtools = true;

Vue.component('task', {
  template: '<li>Foobar</li>'
});

new Vue({
  el: '#root'
});
