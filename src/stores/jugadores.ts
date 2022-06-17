import { defineStore } from "pinia";

export const useJugadoresStore = defineStore("main", {
  state: () => ({
    jugador: true,
    marcaJugador: ""
  }),
  actions: {
    reset() {
      this.jugador = true;
    
    },
    obtenerJugador() {
      if (this.jugador) {
        this.marcaJugador = "X"
      } else {
        this.marcaJugador = "O"
      }
    },
    cambiarJugador(){
        this.jugador = !this.jugador;
    }
  },
});
