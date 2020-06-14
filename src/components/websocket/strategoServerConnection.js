import { io } from 'socket.io-client';

export class StrategoServerConnection {
  socket = null;
  connectToServer() {
    this.socket = io("http://webprogramozas.inf.elte.hu:3030");
  }
  sendMessage(target, message) {
    this.socket.emit(target, message);
  }

  onReceiveMessage(target, callback) {
    const listener = (message) => {
      if (this.socket.id !== message.emitter) {
        callback(message);
      }
    };
    this.socket.on(target, listener);
    return () => this.socket.off(target, listener);
  }
}

export const webSocket = new StrategoServerConnection();

export const webSocketConnect = () => dispatch => {
  webSocket.connectToServer();
};