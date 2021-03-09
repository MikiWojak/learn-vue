Vue.config.devtools = true;

Vue.component('message', {
  props: ['title', 'body'],

  template: `
  <article class="message">
    <div class="message-header">
      {{ title }}
      <button type="button">x</button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
  `
});

new Vue({
  el: '#root'
});
