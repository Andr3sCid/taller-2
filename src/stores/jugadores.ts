import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: () => ({
    jugador: true,
  }),
  actions: {
    reset() {
      this.jugador = true;
    },
    obtenerJugador() {
      if (this.jugador) {
        return "X";
      } else {
        return "O";
      }
    },
    cambiarJugador(){
        this.jugador = !this.jugador;
    }
  },
});
