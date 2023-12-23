enum TodoListFilter {
  input,
  all,
  active,
  completed,
}

extension TodoListFilterExtension on TodoListFilter {
  String get convertToText {
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
