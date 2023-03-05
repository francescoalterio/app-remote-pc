import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import { initializeSocket } from "../services/socketServices";

type SocketEmits = "up" | "down" | "left" | "right" | "cancel";

export function useSocket() {
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    if (!socket) {
      const ioSocket = initializeSocket();
      setSocket(ioSocket);
    }
  });

  function socketEmit(emit: SocketEmits) {
    if (socket) socket.emit(emit);
  }

  return { socketEmit };
}
