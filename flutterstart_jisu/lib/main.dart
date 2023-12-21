import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "JisuFlix",
      theme: ThemeData(brightness: Brightness.dark, primaryColor: Colors.black),
      home: Scaffold(
        appBar: AppBar(
          title: Text("JisuFlixButton"),
        ),
        body: Container(
          child: Text("hello"),
        ),
      ),
    );
  }
}
