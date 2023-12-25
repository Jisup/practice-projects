import 'package:flutter/material.dart';
import 'package:flutter_todolist/screens/todo/todo_home.dart';
import 'package:flutter_todolist/screens/todo/todo_input.dart';
import 'package:flutter_todolist/screens/todo/todo_list.dart';
import 'package:go_router/go_router.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

GoRouter appRouter = GoRouter(
  navigatorKey: navigatorKey,
  initialLocation: "/",
  routes: [
    GoRoute(
      path: '/',
      name: "home",
      pageBuilder: (context, state) => NoTransitionPage(child: TodoHome()),
    ),
    GoRoute(
        path: '/todo',
        name: "input",
        pageBuilder: (context, state) => NoTransitionPage(child: TodoInput()),
        routes: [
          GoRoute(
            path: 'all',
            name: "all",
            pageBuilder: (context, state) =>
                NoTransitionPage(child: TodoList()),
          ),
          GoRoute(
            path: 'active',
            name: "active",
            pageBuilder: (context, state) =>
                NoTransitionPage(child: TodoList()),
          ),
          GoRoute(
            path: 'completed',
            name: "completed",
            pageBuilder: (context, state) {
              return NoTransitionPage(child: TodoList());
            },
          ),
        ]),
  ],
);
