import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_todolist/provider/todo_provider.dart';
import 'package:flutter_todolist/screens/todo/todo_list.dart';
import 'package:flutter_todolist/screens/todo/todo_input.dart';
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
        body: ListView(
          scrollDirection: Axis.vertical,
          children: [
            Container(
              // width: MediaQuery.of(context).size.width * 0.75,
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
                      child: Tab(
                        text: filter.convertToText,
                      ),
                    );
                  },
                ).toList(),
              ),
            ),
            // TodoList(),
          ],
        ));
    // return DefaultTabController(
    //   length: myFilters.length,
    //   child: Scaffold(
    //     appBar: AppBar(
    //       title: Text("TodoList"),
    //       bottom: TabBar(
    //   actions: myFilters.map((filter) {
    //     return GestureDetector(
    //       onTap: () => todoListFilter_notifier.state = filter,
    //       child: Tab(
    //         text: filter.convertToText,
    //       ),
    //     );
    //   }).toList(),
    // ),
    //   ),
    //   body: TabBarView(
    //     children: [
    //       TodoList(),
    //     ],
    //   ),
    // ),
    // );
  }
}
