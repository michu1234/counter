<template>
  <section class="counter__form">
    <input id="time" type="number" required placeholder="60">
    <button class="myButton" @click="updateTime">Submit Time</button>
   <input id="text" type="text" required placeholder="Once upon a time...">
    <button class="myButton" @click="updateText">Add Text</button>
  </section>
</template>

<script>
  export default {
    name: 'Form',
    data () {
      return {
      time: "60",
      msg: "Once upon a time..."
      }
    },
    methods: {
      updateTime() {
        let timeValue = document.querySelector('#time').value;
        this.time = timeValue;
        console.log(this.time);
      },
      updateText() {
        let textValue = document.querySelector('#text').value;
        this.text = textValue;
        console.log(this.text);
      }
    }
  }
</script>

<style scoped>
  html{
    font: normal 1.3rem/1.3rem Arial, sans-serif;
    color: #ffffff;
  }
  .counter__form {
    display: flex;
  }

    .myButton {
      -moz-box-shadow:inset 0px 1px 0px 0px #7a8eb9;
      -webkit-box-shadow:inset 0px 1px 0px 0px #7a8eb9;
      box-shadow:inset 0px 1px 0px 0px #7a8eb9;
      background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #637aad), color-stop(1, #5972a7));
      background:-moz-linear-gradient(top, #637aad 5%, #5972a7 100%);
      background:-webkit-linear-gradient(top, #637aad 5%, #5972a7 100%);
      background:-o-linear-gradient(top, #637aad 5%, #5972a7 100%);
      background:-ms-linear-gradient(top, #637aad 5%, #5972a7 100%);
      background:linear-gradient(to bottom, #637aad 5%, #5972a7 100%);
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#637aad', endColorstr='#5972a7',GradientType=0);
      background-color:#637aad;
      border:1px solid #314179;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:13px;
      font-weight:bold;
      padding:6px 12px;
      text-decoration:none;
    }
    .myButton:hover {
      background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #5972a7), color-stop(1, #637aad));
      background:-moz-linear-gradient(top, #5972a7 5%, #637aad 100%);
      background:-webkit-linear-gradient(top, #5972a7 5%, #637aad 100%);
      background:-o-linear-gradient(top, #5972a7 5%, #637aad 100%);
      background:-ms-linear-gradient(top, #5972a7 5%, #637aad 100%);
      background:linear-gradient(to bottom, #5972a7 5%, #637aad 100%);
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#5972a7', endColorstr='#637aad',GradientType=0);
      background-color:#5972a7;
    }
    .myButton:active {
      position:relative;
      top:1px;
    }
  input {
    background-color: #1e2633;
    padding-left: 10px;
    color: #ffffff;
    border: 2px solid black;
  }
</style>
