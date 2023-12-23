import 'package:flutter/material.dart';
import 'package:flutter_todolist/models/todo_model.dart';

class TodoAll extends StatefulWidget {
  const TodoAll({super.key});

  @override
  State<TodoAll> createState() => _TodoAllState();
}

class _TodoAllState extends State<TodoAll> {
  late var mediaWidth = 0.0;

  List<Todo> myTodos = [
    Todo.fromMap({
      "id": 1,
      "work": "누워있기",
      "check": false,
    }),
    Todo.fromMap({
      "id": 2,
      "work": "앉아있기",
      "check": false,
    }),
    Todo.fromMap({
      "id": 3,
      "work": "서있기",
      "check": false,
    }),
    Todo.fromMap({
      "id": 4,
      "work": "돌아다니기",
      "check": false,
    }),
  ];

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    mediaWidth = MediaQuery.of(context).size.width;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: mediaWidth * 0.1,
      margin: EdgeInsets.only(top: 5),
      child: ListView(
        scrollDirection: Axis.vertical,
        // children: myTodos.map((todos) => Text("dd"),).toList(),
        children: [
          for (var i = 0; i < myTodos.length; i++)
            Container(
              child: Row(
                children: [
                  Checkbox(
                    value: myTodos[i].check,
                    checkColor: Colors.white,
                    activeColor: Colors.blue,
                    onChanged: (bool? value) => setState(() {
                      myTodos[i].check = value!;
                    }),
                  ),
                  Expanded(
                    child: Container(
                      margin: EdgeInsets.fromLTRB(10, 5, 10, 5),
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        border: Border.all(
                          width: 5,
                          color:
                              myTodos[i].check ? Colors.blue : Colors.black26,
                        ),
                        // color: Colors.blue,
                        borderRadius: BorderRadius.circular(5),
                      ),
                      child: Text(
                        myTodos[i].work,
                        style: TextStyle(
                            fontSize: 12, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}
