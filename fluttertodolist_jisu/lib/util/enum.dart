enum TodoListFilter {
  input,
  all,
  active,
  completed,
}

extension TodoListFilterEnum on TodoListFilter {
  String get convertToString {
    switch (this) {
      case TodoListFilter.input:
        return "input";
      case TodoListFilter.all:
        return "all";
      case TodoListFilter.active:
        return "active";
      case TodoListFilter.completed:
        return "completed";
    }
  }
}

extension TodoListFilterString on String {
  TodoListFilter get convertToEnum {
    switch (this) {
      case "input":
        return TodoListFilter.input;
      case "all":
        return TodoListFilter.all;
      case "active":
        return TodoListFilter.active;
      case "completed":
        return TodoListFilter.completed;
      default:
        return TodoListFilter.input;
    }
  }
}
