import { Server, Socket } from "socket.io";

export class Game {
    gameStatus: "not-started" | "in-progress" | "finished";
    gameId: string;
    players: {id:string;  score: number; name: string}[]
    io: Server
    gameHost: string;
    paragraph: string;

    constructor(id: string, io:Server, host: string){
        this.gameId = id;
        this.players = [];
        this.io = io;
        this.gameHost = host;
        this.gameStatus = 'not-started';
        this.paragraph = "";
    }

    setupListeners(socket:Socket){
     
    }
}