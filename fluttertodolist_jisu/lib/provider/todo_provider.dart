import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/models/todo_model.dart';
import 'package:flutter_todolist/util/enum.dart';

final todoListProvider =
    NotifierProvider<TodoNotifier, List<Todo>>(TodoNotifier.new);

final todoListFilter = StateProvider((_) => TodoListFilter.input);

class TodoNotifier extends Notifier<List<Todo>> {
  final id = StateProvider((_) => 5);

  @override
  List<Todo> build() {
    // TODO: implement build
    return [
      Todo.fromJson({
        "id": 1,
        "work": "누워있기",
        "check": false,
      }),
      Todo.fromJson({
        "id": 2,
        "work": "앉아있기",
        "check": false,
      }),
      Todo.fromJson({
        "id": 3,
        "work": "서있기",
        "check": false,
      }),
      Todo.fromJson({
        "id": 4,
        "work": "돌아다니기",
        "check": false,
      }),
    ];
  }

  Todo getTodo(int todoId) {
    return state.singleWhere((todo) => todo.id == todoId);
  }

  void addTodo(String work) {
    state = [...state, Todo(id: ref.watch(id), work: work, check: false)];
    ref.watch(id.notifier).update((state) => state + 1);
  }

  void removeTodo(int todoId) {
    state = [
      for (final todo in state)
        if (todo.id != todoId) todo
    ];
  }

  void modifyTodo(int todoId, String newWork) {
    state = [
      for (final todo in state)
        todo.id == todoId ? todo.copyWith(work: newWork) : todo
    ];
  }

  void updateTodoList(int todoId) {
    state = [
      for (final todo in state)
        todo.id == todoId ? todo.copyWith(check: !todo.check) : todo
    ];
  }
}
