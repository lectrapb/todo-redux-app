import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos' ;

export const filtroReducer = createReducer<filtrosValidos, Action>(initialState,
  on( actions.setFiltro, (state, {filtro}) => filtro),
);