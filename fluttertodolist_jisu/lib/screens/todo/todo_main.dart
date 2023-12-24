import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';
import 'package:flutter_todolist/screens/todo/todo_input.dart';
import 'package:flutter_todolist/screens/todo/todo_list.dart';
import 'package:flutter_todolist/util/enum.dart';

class TodoMain extends ConsumerWidget {
  const TodoMain({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ref.watch(todoListFilter) == TodoListFilter.input
        ? TodoInput()
        : TodoList();
  }
}
