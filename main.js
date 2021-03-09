Vue.config.devtools = true;

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
