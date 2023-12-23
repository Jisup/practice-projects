class Todo {
  final int id;
  final String work;
  bool check;

  Todo.fromMap(Map<String, dynamic> map)
      : id = map["id"],
        work = map["work"],
        check = map["check"];

  void changeCheck(bool value) {
    check = value;
  }

  @override
  String toString() {
    // TODO: implement toString
    return "Todo<$id, $work, $check>";
  }
}
