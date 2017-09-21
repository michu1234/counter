<template>
  <main id="counter">
    <section class="counter__form">
      <input id="time" type="number" required placeholder="Time in seconds (1-99)">
      <button class="myButton" @click="updateTime">Submit Time</button>
      <input id="text" type="text" required placeholder="Once upon a time...">
      <button class="myButton" @click="updateText">Add Text</button>
  </section>
    <section class="counter__box">
    <div class="counter__background"><p v-if="this.time < 99" class="counter__numbers">{{this.time}}</p></div>
    <p class="counter__text" v-text=this.msg>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque optio placeat est obcaecati deleniti ratione commodi aperiam exercitationem sint dolore ut error dignissimos voluptas aliquam reprehenderit corporis debitis, aut at ipsum ullam accusantium. Eligendi dolorem numquam illo obcaecati harum quisquam? Aut est, molestias velit eum, ut iure pariatur. Explicabo impedit iure atque, commodi ex. Quos magnam harum ab error quaerat, qui consectetur! Ad perspiciatis, voluptatibus nesciunt pariatur. Nam aliquam dignissimos repudiandae neque adipisci voluptatibus inventore excepturi rerum atque consectetur ipsa dolorem, quisquam perspiciatis. Libero quos dolor error totam tenetur, sapiente dignissimos ipsum sunt doloremque omnis, veritatis ex iste doloribus illum eveniet eius, porro? Facere ab a, dignissimos debitis dolor aperiam dolorum ipsum placeat quibusdam fugit sed rerum mollitia totam doloribus.</p>
   <img src="../src/img/warstwa3.png" alt="" class="counter__image">
   </section>
  </main>
</template>

<script>

  export default {
    name: 'counter',
    data() {
      return {
        placeholder: 'Once upon a time...',
        msg: 'Wszystkie miejsca zostały zajęte. Rozstrzygnięcie konkursu za:',
        time: '00',
        decrease: '',
        multiplier: 0.062831, // Math.PI * 2
        startAngleFrom: ''
      }
    },
    methods: {
      updateTime() {
        let timeValue = document.querySelector('#time').value;
        this.time = timeValue;
        var self = this;
        if (self.time && self.time !== 0) {
          var timerId = setInterval(function() {
            self.time--;
            self.decrease = self.time;
            console.log(self.decrease);
            if (self.time === 0) {
              clearInterval(timerId);
            }
            if(self.time > 99) {
              alert('Podałeś złą liczbę!');
              clearInterval(timerId);
              self.time = "00";
            }
          }, 1000);
        }
      },
      updateText() {
        let textValue = document.querySelector('#text').value;
        this.msg = textValue;
      }
    },
    watch: {
      decrease: function(){
        this.startAngleFrom = this.decrease * this.multiplier;
        console.log(this.startAngleFrom);
      },
      startAngleFrom: function() {
        var width = 200;
        var height = 200;

        var svg = d3.select('body .counter__box').append('svg');
        svg.attr('width', width);
        svg.attr('height', height);

        var arc = d3.arc()
        .innerRadius(70)
        .outerRadius(100)
        .startAngle(10)
        .endAngle(Math.PI / 2);

        var arc2 = d3.arc()
        .innerRadius(78)
        .outerRadius(92)
        .startAngle(0)
        .endAngle(this.startAngleFrom);

        svg.append('path').attr('d', arc).attr("stroke", "#1c232e").attr('fill', '#394d6c').attr('transform', 'translate(100,100)');

        svg.append('path').attr('d', arc2).attr("fill", "#ffffff").attr('transform', 'translate(100,100)');
      }
    }
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

  p {
    padding: 20px 21% 20px 21%;
    font: normal 1.6rem/2rem 'Montserrat', sans-serif;
  }

  svg {
    position: absolute;
    right: -40px;
    top: -40px;
  }

  input {
    background-color: #1e2633;
    padding-left: 10px;
    color: #ffffff;
    border: 2px solid #000000;
  }

  .counter__box {
    background-image: url(../src/img/warstwa2.png);
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 100px auto;
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

  .counter__form {
    display: flex;
  }

  .counter__background {
    position: absolute;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    border: 30px solid #1c232e;
    right: -50px;
    top: -50px;
    box-shadow: 0 3px 5px 3px rgba(0, 0, 0, 0.2), inset 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #1e2633;
  }

  .counter__numbers {
    font: bold 4rem/4rem Arial, sans-serif;
    text-align: center;
  }
  .counter__text {
    text-align: justify;
    padding: 60px 180px 30px 180px;
    min-height: 50px;
  }

  .counter__numbers::after {
    content: " s";
    color: #ffffff;
    font-size: 19px;
  }

  .myButton {
    -moz-box-shadow: inset 0px 1px 0px 0px #7a8eb9;
    -webkit-box-shadow: inset 0px 1px 0px 0px #7a8eb9;
    box-shadow: inset 0px 1px 0px 0px #7a8eb9;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #637aad), color-stop(1, #5972a7));
    background: -moz-linear-gradient(top, #637aad 5%, #5972a7 100%);
    background: -webkit-linear-gradient(top, #637aad 5%, #5972a7 100%);
    background: -o-linear-gradient(top, #637aad 5%, #5972a7 100%);
    background: -ms-linear-gradient(top, #637aad 5%, #5972a7 100%);
    background: linear-gradient(to bottom, #637aad 5%, #5972a7 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#637aad', endColorstr='#5972a7', GradientType=0);
    background-color: #637aad;
    border: 1px solid #314179;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
  }

  .myButton:hover {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #5972a7), color-stop(1, #637aad));
    background: -moz-linear-gradient(top, #5972a7 5%, #637aad 100%);
    background: -webkit-linear-gradient(top, #5972a7 5%, #637aad 100%);
    background: -o-linear-gradient(top, #5972a7 5%, #637aad 100%);
    background: -ms-linear-gradient(top, #5972a7 5%, #637aad 100%);
    background: linear-gradient(to bottom, #5972a7 5%, #637aad 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5972a7', endColorstr='#637aad', GradientType=0);
    background-color: #5972a7;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }


  @media screen and (max-width: 900px){
    .counter__text {
      padding: 180px 5% 130px 5%;
      text-align: left;
    }
  }
  @media screen and (max-width: 570px){
    .counter__form {
      flex-direction: column;
    }
    input[type="text"],
    input[type="number"]{
      height: 50px;
      padding-left: 4%;
    }
  }
</style>
