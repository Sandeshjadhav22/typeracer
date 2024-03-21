import { Server } from "socket.io";

export function setupListeners(io: Server) {
  io.on("connection", (socket) => {
    console.log(`New connection - ${socket.id}`);

    socket.on("join-game", (roomId: string, name: string) => {
      if (!roomId) return socket.emit("error", "Invalid room Id");

      if (!name) return socket.emit("error", "Please provide nickname");

      socket.join(roomId)
    });
  });
}
