import 'package:flutter/material.dart';

class TodoInput extends StatefulWidget {
  const TodoInput({super.key});

  @override
  State<TodoInput> createState() => _TodoInputState();
}

class _TodoInputState extends State<TodoInput> {
  late TextEditingController _textEditingController;

  late var mediaWidth = 0.0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _textEditingController = TextEditingController();
  }

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    mediaWidth = MediaQuery.of(context).size.width;
  }

  @override
  void dispose() {
    // TODO: implement dispose
    _textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(mediaWidth * 0.1),
      alignment: Alignment.topCenter,
      child: TextField(
        controller: _textEditingController,
        decoration: InputDecoration(
          icon: Icon(Icons.edit),
          labelText: "today`s todo",
          helperText: "anything you can do it",
          hintText: "write here, your todo",
          border: OutlineInputBorder(),
          // contentPadding: EdgeInsets.all(15),
        ),
        onSubmitted: (value) => {},
      ),
    );
  }
}
