<template>
  <div id="app">

    <h1>JUEGO DEL GATO</h1>
    <h3>Comience el jugador X</h3>

    <section id="juego">
        <div id="zonaJuego">
        <div id="zona1"></div>
        <div id="zona2"></div>
        <div id="zona3"></div>
        <div id="zona4"></div>
        <div id="zona5"></div>
        <div id="zona6"></div>
        <div id="zona7"></div>
        <div id="zona8"></div>
        <div id="zona9"></div>
    </div>
    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    body{
        background-color: #042940;
    }

    h1, h3{
        color: white;
    }

    #juego{
        width:100%;
        display: flex;
        justify-content: center;
    }
    
    #zonaJuego{
        display: grid;
        grid-template-rows: 100px 100px 100px;
        grid-template-columns: 100px 100px 100px;
    }

    #zona1{
        border-right: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
    }

    #zona2{
        border-right: 3px solid #D6D58E;
        border-left: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
    }

    #zona3{
        border-left: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
    }

    #zona4{
        border-right: 3px solid #D6D58E;
        border-top: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
    }

    #zona5{
        border-right: 3px solid #D6D58E;
        border-top: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
        border-left: 3px solid #D6D58E;
    }

    #zona6{
        border-left: 3px solid #D6D58E;
        border-top: 3px solid #D6D58E;
        border-bottom: 3px solid #D6D58E;
    }

    #zona7{
        border-right: 3px solid #D6D58E;
        border-top: 3px solid #D6D58E;
    }

    #zona8{
        border-right: 3px solid #D6D58E;
        border-left: 3px solid #D6D58E;
        border-top: 3px solid #D6D58E;
    }

    #zona9{
        border-top: 3px solid #D6D58E;
        border-left: 3px solid #D6D58E;
    }
</style>