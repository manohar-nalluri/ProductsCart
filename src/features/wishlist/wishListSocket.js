import { useRef } from "react";

export const socket=useRef()
export const socketInit=()=>{
 socket.current = io(SOCKET_SERVER_URL, {
    reconnection: true,  
    reconnectionAttempts: Infinity, 
    reconnectionDelay: 1000, 
    reconnectionDelayMax: 5000, 
    timeout: 20000, 
  });
}
