import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ChatActions from './chat.actions';
import { OpenaiService } from '../services/openai';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ChatEffects {
  private actions$ = inject(Actions);
  private openaiService = inject(OpenaiService);

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.sendMessage),
      mergeMap(action =>
        this.openaiService.sendPrompt(action.message).pipe(
          map(res =>
            ChatActions.sendMessageSuccess({ response: res.response })
          ),
          catchError(() =>
            of(
              ChatActions.sendMessageFailure({
                error: 'Error al conectar con el servidor.',
              })
            )
          )
        )
      )
    )
  );
}
