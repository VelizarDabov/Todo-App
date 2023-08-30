export const AddTodoAction = (todo) => ({
type:'ADD_TODO',
payload:todo,
})
  export const RemoveTodoAction = (todoId) => ({
   type: 'REMOVE_TODO',
   payload:todoId,
  });