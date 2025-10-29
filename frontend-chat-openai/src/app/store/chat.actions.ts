import { createAction, props } from '@ngrx/store';

// 🔹 Acción cuando el usuario envía un mensaje
export const sendMessage = createAction(
  '[Chat] Send Message',
  props<{ message: string }>()
);

// 🔹 Acción cuando la respuesta de OpenAI llega con éxito
export const sendMessageSuccess = createAction(
  '[Chat] Send Message Success',
  props<{ response: string }>()
);

// 🔹 Acción cuando ocurre un error al conectar con el backend
export const sendMessageFailure = createAction(
  '[Chat] Send Message Failure',
  props<{ error: string }>()
);
