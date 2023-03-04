import io from "socket.io-client";

const SOCKET_URL = "http://192.168.1.5:3000";

export function initializeSocket() {
  const socket = io(SOCKET_URL, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("CONECTADO");
  });

  socket.on("disconnect", () => {
    console.log("DESCONECTADO");
  });

  socket.on("error", () => {
    console.log("ERROR");
  });

  return socket;
}
