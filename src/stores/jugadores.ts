import { defineStore } from "pinia";

export const useJugadoresStore = defineStore("main1", {
  state: () => ({
    jugador: true,
    marcaJugador: ["","","","","","","","",""],
  }),
  actions: {
    reset() {
      this.jugador = true;
      this.marcaJugador= ["","","","","","","","",""];
    },
    obtenerJugador(num) {
      if (this.jugador) {
        this.marcaJugador[num] = "X"
      } else {
        this.marcaJugador[num] = "O"
      }
      this.cambiarJugador();
    },
    cambiarJugador(){
        this.jugador = !this.jugador;
    },
  }
});
