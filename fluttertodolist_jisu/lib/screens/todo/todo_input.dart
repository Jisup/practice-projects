import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';

class TodoInput extends ConsumerWidget {
  TodoInput({super.key});

  // late TextEditingController _textEditingController;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var mediaWidth = MediaQuery.of(context).size.width;

    var todoList_notifier = ref.watch(todoListProvider.notifier);

    return Container(
      padding: EdgeInsets.all(mediaWidth * 0.1),
      alignment: Alignment.topCenter,
      child: TextField(
        // controller: _textEditingController,
        decoration: InputDecoration(
          icon: Icon(Icons.edit),
          labelText: "today`s todo",
          helperText: "anything you can do it",
          hintText: "write here, your todo",
          border: OutlineInputBorder(),
        ),
        onSubmitted: (value) => todoList_notifier.addTodo(value),
      ),
    );
  }
}
