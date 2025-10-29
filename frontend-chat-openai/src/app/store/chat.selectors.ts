import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

// 1️⃣ Selecciona la parte 'chat' del estado global
export const selectChatState = createFeatureSelector<ChatState>('chat');

// 2️⃣ Crea selectores específicos
export const selectMessages = createSelector(
  selectChatState,
  (state) => state.messages
);

export const selectLoading = createSelector(
  selectChatState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectChatState,
  (state) => state.error
);
