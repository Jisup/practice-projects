class Todo {
  int? id;
  String? work;
  late bool check;

  Todo({this.id, this.work, required this.check});

  Todo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    work = json['work'];
    check = json['check'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = id;
    data['work'] = work;
    data['check'] = check;
    return data;
  }

  Todo copyWith({int? id, String? work, bool? check}) => Todo(
        id: id ?? this.id,
        work: work ?? this.work,
        check: check ?? this.check,
      );
}
