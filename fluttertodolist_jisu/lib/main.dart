import 'package:flutter/material.dart';
import 'package:flutter_todolist/screens/todo_home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "TodoList",
      theme: ThemeData(brightness: Brightness.light, primaryColor: Colors.blue),
      home: TodoHome(),
    );
  }
}