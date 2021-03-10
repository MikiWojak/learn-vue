Vue.config.devtools = true;

Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `,

  mounted() {
    this.tabs = this.$children;
  }
});

Vue.component('tab', {
  template: `
    <div><slot></slot></div>
  `,

  props: {
    name: { required: true }
  }
});

new Vue({
  el: '#root'
});
