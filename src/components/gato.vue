<template>
  <div id="app">
    <h1>JUEGO DEL GATO</h1>
    <h3>Comience el jugador x</h3>

    <section id="juego">
      <div id="zonaJuego">
        <button id="zona1" v-on:click="obtenerJug(0)" > <h1 >{{ main.marcaJugador[0] }}</h1>
        </button>
        <button id="zona2" v-on:click="obtenerJug(1)" > <h1 >{{ main.marcaJugador[1] }}</h1>
        </button>
        <button id="zona3" v-on:click="obtenerJug(2)" > <h1 >{{ main.marcaJugador[2] }}</h1>
        </button>
        <button id="zona4" v-on:click="obtenerJug(3)" > <h1 >{{ main.marcaJugador[3] }}</h1>
        </button>
        <button id="zona5" v-on:click="obtenerJug(4)" > <h1 >{{ main.marcaJugador[4] }}</h1>
        </button>
        <button id="zona6" v-on:click="obtenerJug(5)" > <h1 >{{ main.marcaJugador[5] }}</h1>
        </button>
        <button id="zona7" v-on:click="obtenerJug(6)" > <h1 >{{ main.marcaJugador[6] }}</h1>
        </button>
        <button id="zona8" v-on:click="obtenerJug(7)" > <h1 >{{ main.marcaJugador[7] }}</h1>
        </button>
        <button id="zona9" v-on:click="obtenerJug(8)" > <h1 >{{ main.marcaJugador[8] }}</h1>
        </button>
      </div>
    </section>
    <h1 v-if="main.ganador()!=null"> a ganado el jugador {{main.ganador()}}</h1>
    <button class="button_reset" v-on:click="reset()">reiniciar</button>
  </div>
</template>

<script setup>
import { useJugadoresStore } from "../stores/jugadores";

const main = useJugadoresStore();
function obtenerJug(num) {
  main.obtenerJugador(num);
}
function reset(){
  main.reset();
}



</script>

<style>

.button_reset{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
}

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