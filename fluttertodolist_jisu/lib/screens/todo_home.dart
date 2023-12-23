import 'package:flutter/material.dart';
import 'package:flutter_todolist/widget/todo_active.dart';
import 'package:flutter_todolist/widget/todo_all.dart';
import 'package:flutter_todolist/widget/todo_complete.dart';
import 'package:flutter_todolist/widget/todo_input.dart';

class TodoHome extends StatefulWidget {
  const TodoHome({super.key});

  @override
  State<TodoHome> createState() => _TodoHomeState();
}

class _TodoHomeState extends State<TodoHome> {
  List<Widget> myTabs = <Widget>[
    Tab(text: "input"),
    Tab(text: "all"),
    Tab(text: "active"),
    Tab(text: "complete"),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          title: Text("TodoList"),
          bottom: TabBar(
            tabs: myTabs,
          ),
        ),
        body: TabBarView(
          children: [
            TodoInput(),
            TodoAll(),
            TodoActive(),
            TodoComplete(),
          ],
        ),
      ),
    );
  }
}
