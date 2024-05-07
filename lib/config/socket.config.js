import { socketUrl } from "@/api/Endpoints/apiEndPoints";
import io from "socket.io-client";
export const socketInstance = io(socketUrl);

// useEffect(() => {
//     console.log("socketUrl",socketUrl);
// }, [])

// console.log("socketUrl",socketInstance);

// socketIO.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on('disconnect', () => {
//       console.log('🔥: A user disconnected');
//     });
// });

// export const conectFromConnection = () => {
// socketInstance.connect();
// socketInstance.on();
// io.on("Socket_connection test", function (socketInstance) {
//   console.log("a user connected");
// });
// console.log("Socket On...", socketInstance);
// };

// export const disconectFromConnection = () => {
//   socketInstance.disconnect();
//   console.log("disconectFromConnection", socketInstance);
// };

// const socket = io();
// socket.emit('login',{userId:'YourUserID'});

// const users = {};
// io.on('connection', function(socket){
//   console.log('a user connected');

//   socket.on('login', function(data){
//     console.log('a user ' + data.userId + ' connected');
//     users[socket.id] = data.userId;
//   });

//   socket.on('disconnect', function(){
//     console.log('user ' + users[socket.id] + ' disconnected');
//     delete users[socket.id];
//   });
// });

// console.log("a user connected");
// socket.on("disconnect", function () {
//   console.log("user disconnected");
// });
