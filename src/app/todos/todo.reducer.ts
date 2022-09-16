import { Action, createReducer, on } from '@ngrx/store';
import { Todo} from './models/todo.model';
import { crear, toggle, editar, borrar, toogleAll, limpiarTodos } from './todo.actions';

export const estadoInicial: Todo[] = [

    new Todo('salvar al mundo'),
    new Todo('vencer a thanos'),
    new Todo('salvar al wacanda'),
    new Todo('recuperar escudo'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(limpiarTodos,  (state) =>  state.filter(todo => !todo.completado)),
  on(crear,  (state, {texto}) => [...state, new Todo( texto)]),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)), 
  on(toogleAll, (state, { completado }) => state.map(todo =>{
         return {
           ...todo, 
           completado: completado 
         }})
  ), 
  on(toggle, (state, { id }) => {
      return state.map(todo =>{            
        if(todo.id === id){           
          return {
            ...todo,
            completado: !todo.completado
          }
        }else {
          return todo;
        }
       
      }); 
  }),

  on(editar, (state, { id, texto }) => {
    return state.map(todo =>{            
      if(todo.id === id){           
        return {
          ...todo,
          texto: texto
        }
      }else {
        return todo;
      }
     
    }); 
}),

);

export function todoReducer(state: any, action: Action){
    return _todoReducer(state, action);
}