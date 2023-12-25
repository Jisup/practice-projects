import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';
import 'package:flutter_todolist/screens/todo/todo_main.dart';
import 'package:flutter_todolist/util/enum.dart';

class TodoHome extends ConsumerWidget {
  TodoHome({super.key});

  List<TodoListFilter> myFilters = [
    TodoListFilter.input,
    TodoListFilter.all,
    TodoListFilter.active,
    TodoListFilter.completed,
  ];

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var todoListFilter_notifier = ref.watch(todoListFilter.notifier);

    return Scaffold(
      appBar: AppBar(title: Text("TodoList")),
      body: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(color: Colors.blue),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: myFilters.map(
                (filter) {
                  return GestureDetector(
                    onTap: () => todoListFilter_notifier.state = filter,
                    behavior: HitTestBehavior.translucent,
                    child: Container(
                      width:
                          MediaQuery.of(context).size.width / myFilters.length,
                      padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              filter.convertToString,
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 12),
                            ),
                          ]),
                    ),
                  );
                },
              ).toList(),
            ),
          ),
          Expanded(
            child: LayoutBuilder(
              builder:
                  (BuildContext context, BoxConstraints viewportConstraints) {
                return SingleChildScrollView(
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      minHeight: viewportConstraints.maxHeight,
                    ),
                    child: TodoMain(),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
