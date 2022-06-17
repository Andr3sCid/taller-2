<template>
  <div id="app">
    <h1>JUEGO DEL GATO</h1>
    <h3>Comience el jugador X</h3>

    <section id="juego">
      <div id="zonaJuego">
        <button id="zona1"></button>
        <button id="zona2"></button>
        <button id="zona3"></button>
        <button id="zona4"></button>
        <button id="zona5"></button>
        <button id="zona6"></button>
        <button id="zona7"></button>
        <button id="zona8"></button>
        <button id="zona9"></button>
      </div>
    </section>
    <h1>{{main.counter}}</h1>
    <button @click="main.incrementar">Incrementar</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const main = useCounterStore();
const contador = main.counter;


</script>

<style>
body {
  background-color: #042940;
}

h1,
h3 {
  color: white;
}

button {
  background-color: #042940;
  border: none;
}

button:hover {
  background-color: #0d4466;
}

#juego {
  width: 100%;
  display: flex;
  justify-content: center;
}

#zonaJuego {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
}

#zona1 {
  border-right: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
}

#zona2 {
  border-right: 3px solid #d6d58e;
  border-left: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
}

#zona3 {
  border-left: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
}

#zona4 {
  border-right: 3px solid #d6d58e;
  border-top: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
}

#zona5 {
  border-right: 3px solid #d6d58e;
  border-top: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
  border-left: 3px solid #d6d58e;
}

#zona6 {
  border-left: 3px solid #d6d58e;
  border-top: 3px solid #d6d58e;
  border-bottom: 3px solid #d6d58e;
}

#zona7 {
  border-right: 3px solid #d6d58e;
  border-top: 3px solid #d6d58e;
}

#zona8 {
  border-right: 3px solid #d6d58e;
  border-left: 3px solid #d6d58e;
  border-top: 3px solid #d6d58e;
}

#zona9 {
  border-top: 3px solid #d6d58e;
  border-left: 3px solid #d6d58e;
}
</style>