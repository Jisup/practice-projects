import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';

class TodoInput extends ConsumerStatefulWidget {
  const TodoInput({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _TodoInputState();
}

class _TodoInputState extends ConsumerState<TodoInput> {
  late TextEditingController todoInputController;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    todoInputController = TextEditingController();
  }

  @override
  void dispose() {
    // TODO: implement dispose
    todoInputController.dispose();
    super.dispose();
  }

  void addTodo() {
    final todoValue = todoInputController.text;
    // why ref is init?
    ref.watch(todoListProvider.notifier).addTodo(todoValue);
  }

  @override
  Widget build(BuildContext context) {
    var mediaWidth = MediaQuery.of(context).size.width;

    var todoList_notifer = ref.watch(todoListProvider.notifier);

    return Container(
      padding: EdgeInsets.all(mediaWidth * 0.1),
      alignment: Alignment.topCenter,
      child: Column(
        children: [
          TextField(
            controller: todoInputController,
            decoration: InputDecoration(
              icon: Icon(Icons.edit),
              labelText: "today`s todo",
              helperText: "anything you can do it",
              hintText: "write here, your todo",
              border: OutlineInputBorder(),
            ),
          ),
          GestureDetector(
            onTap: () {
              if (todoInputController.text != "" ||
                  todoInputController.text != null) {
                todoList_notifer.addTodo(todoInputController.text);
              }
              todoInputController.clear();
            },
            child: Container(
              margin: EdgeInsets.all(10),
              padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.black, width: 2),
                borderRadius: BorderRadius.circular(5),
              ),
              child: Text("추가"),
            ),
          ),
        ],
      ),
    );
  }
}
