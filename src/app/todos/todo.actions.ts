import { createAction, props } from '@ngrx/store';



export const limpiarTodos = createAction(
    '[TODO] Limpiar Todos'
    );

export const crear = createAction(
    '[TODO] Crear todo',
     props<{texto:string}>()
    );

export const toggle = createAction(
    '[TODO] Editar ',
     props<{id: string}>() 
);

export const editar = createAction(
     '[TODO] Editar Todo',
      props<{id: string, texto: string}>()
);


export const borrar = createAction(
    '[TODO] Borrar Todo',
     props<{id: string}>()
);

export const toogleAll = createAction(
    '[TODO] Toggle all Todo', 
    props<{completado: boolean}>()
);