import { WS_SERVER_URL } from "@shared/constants";
import { io, Socket } from "socket.io-client";
import { ClientEvents, ServerEvents } from "./contracts";
export const socket: Socket<ServerEvents, ClientEvents> = io(WS_SERVER_URL, {
    autoConnect: false,
});
