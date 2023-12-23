import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/models/todo_model.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';
import 'package:flutter_todolist/screens/todo/todo_input.dart';
import 'package:flutter_todolist/util/enum.dart';

final todoFilterListProvider = Provider<List<Todo>>((ref) {
  final filter = ref.watch(todoListFilter);
  final todoList = ref.watch(todoListProvider);

  switch (filter) {
    case TodoListFilter.input:
      return [];
    case TodoListFilter.all:
      return todoList;
    case TodoListFilter.active:
      return todoList.where((todo) => !todo.check!).toList();
    case TodoListFilter.completed:
      return todoList.where((todo) => todo.check!).toList();
  }
});

class TodoList extends ConsumerWidget {
  const TodoList({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var media_width = MediaQuery.of(context).size.width;

    var todoList = ref.watch(todoFilterListProvider);
    var todoList_notifier = ref.watch(todoListProvider.notifier);

    return todoListFilter == TodoListFilter.input
        ? TodoInput()
        : Container(
            width: media_width * 0.1,
            margin: EdgeInsets.only(top: 5),
            child: ListView(
                scrollDirection: Axis.vertical,
                children: todoList
                    .map((todo) => Container(
                          child: Row(
                            children: [
                              Checkbox(
                                value: todo.check,
                                checkColor: Colors.white,
                                activeColor: Colors.blue,
                                onChanged: (bool? value) =>
                                    todoList_notifier.updateTodoList(todo.id!),
                              ),
                              Expanded(
                                child: Container(
                                  margin: EdgeInsets.fromLTRB(10, 5, 10, 5),
                                  padding: EdgeInsets.all(10),
                                  decoration: BoxDecoration(
                                    border: Border.all(
                                      width: 5,
                                      color: todo.check!
                                          ? Colors.blue
                                          : Colors.black26,
                                    ),
                                    // color: Colors.blue,
                                    borderRadius: BorderRadius.circular(5),
                                  ),
                                  child: Text(
                                    todo.work!,
                                    style: TextStyle(
                                        fontSize: 12,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ))
                    .toList()),
          );
  }
}
