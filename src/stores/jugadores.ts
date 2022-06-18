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
    ganador(){
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
      
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i]
      
          if (this.marcaJugador[a] && this.marcaJugador[a] === this.marcaJugador[b] && this.marcaJugador[a] === this.marcaJugador[c]) {
            return this.marcaJugador[a]
          }
        }
      
        return null
    }
  }
});
