import { createReducer, on } from '@ngrx/store';
import * as ChatActions from './chat.actions';

export interface ChatState {
  messages: { role: string; content: string }[];
  loading: boolean;
  error: string | null;
}

export const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
};

export const chatReducer = createReducer(
  initialState,

  // Usuario envía un mensaje
  on(ChatActions.sendMessage, (state, { message }) => ({
    ...state,
    loading: true,
    messages: [...state.messages, { role: 'user', content: message }],
  })),

  // El asistente responde con éxito
  on(ChatActions.sendMessageSuccess, (state, { response }) => ({
    ...state,
    loading: false,
    messages: [...state.messages, { role: 'assistant', content: response }],
  })),

  // Error en la solicitud
  on(ChatActions.sendMessageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
