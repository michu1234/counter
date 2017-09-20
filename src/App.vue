<template>
  <main id="counter">
  <counter-form></counter-form>
    <section class="counter__box"><p></p>
   <img src="/img/warstwa-3.png" alt="" class="counter__image">
   </section>
  </main>
</template>

<script>

import Form from './components/Form.vue'

export default {
  components: {
    'counter-form': Form
  },
  name: 'counter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
  html {
    font-size: 62.5%;
    font-family: Arial;
  }
  body {
    background-color: #151c27;
    color: #ffffff;
    font: normal 1.6rem/1.6rem Arial, sans-serif;
  }
  .counter__box {
    background-image: url(../img/warstwa-2.png);
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 200px auto;
    max-width: 976px;
    min-height: 132px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), inset 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #1e2633;
    position: relative;
    border-radius: 15px;
  }
  .counter__image {
    position: absolute;
    bottom: 0;
    left: 0;

  }
  p {
    padding: 20px 21% 20px 21%;
  }

</style>
