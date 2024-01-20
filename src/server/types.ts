import { Socket } from 'socket.io';

export type SuccessResult = {
  success: true;
  result: unknown;
};

export type ErrorResult = {
  success: false;
  error: {
    message: string;
  };
};

export type HandlerResult = SuccessResult | ErrorResult;

export type SocketHandler = (socket: Socket, data: { data: any }) => Promise<HandlerResult>;

export type SocketRoutes = {
  path: string;
  handler: SocketHandler;
};

export type SocketConnectionHandlers = {
  routes: SocketRoutes[];
  onConnected?: (data: { socketId: string }) => void | Promise<void>;
  onDisconnected?: (data: { socketId: string }) => void | Promise<void>;
};
