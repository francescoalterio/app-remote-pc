import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";

import { SocketEmits } from "../types";

const SOCKET_URL = "http://192.168.1.5:3000";

export function useSocket() {
  const [socket, setSocket] = useState<Socket | "disconnected">();
  useEffect(() => {
    if (socket === undefined) {
      const socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });

      socket.on("connect", () => {
        console.log("CONECTADO");
        setSocket(socket);
      });

      socket.on("disconnect", () => {
        setSocket("disconnected");
        console.log("DESCONECTADO");
      });

      socket.on("error", () => {
        setSocket("disconnected");
        console.log("ERROR");
      });
    }
  });

  function socketEmit(emit: SocketEmits, msg?: string) {
    if (socket && socket !== "disconnected") socket.emit(emit, msg);
  }

  return { socket, socketEmit };
}
