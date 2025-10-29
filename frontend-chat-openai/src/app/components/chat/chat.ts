import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { selectMessages, selectLoading, selectError } from '../../store/chat.selectors';
import * as ChatActions from '../../store/chat.actions';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
})
export class ChatComponent {
  prompt = '';
  messages$: Observable<{ role: string; content: string }[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    // 🔹 Conectamos los observables del store a las propiedades del componente
    this.messages$ = this.store.select(selectMessages);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  sendMessage() {
    if (!this.prompt.trim()) return;

    // 🔹 Despachamos la acción de enviar mensaje
  this.store.dispatch(ChatActions.sendMessage({ message: this.prompt }));



    // 🔹 Limpiamos el input
    this.prompt = '';
  }
}
