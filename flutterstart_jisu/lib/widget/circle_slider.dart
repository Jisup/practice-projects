import 'package:flutter/material.dart';
import 'package:flutter_start/model/model_movie.dart';
import 'package:flutter_start/screen/detail_screen.dart';

class CircleMovies extends StatelessWidget {
  const CircleMovies({super.key, required this.movies});

  final List<Movie> movies;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(7),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text("미리보기"),
          Container(
              height: 120,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: makeCircleImages(context, movies),
              ))
        ],
      ),
    );
  }
}

List<Widget> makeCircleImages(BuildContext context, List<Movie> movies) {
  List<Widget> results = [];
  for (var i = 0; i < movies.length; i++) {
    results.add(
      GestureDetector(
        onTap: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (BuildContext context) {
                return DetailScreen(
                  movie: movies[i],
                );
              },
              fullscreenDialog: true,
            ),
          );
        },
        child: Container(
          padding: EdgeInsets.only(right: 10),
          child: Align(
            alignment: Alignment.centerLeft,
            child: CircleAvatar(
              backgroundImage: AssetImage("lib/assets/" + movies[i].poster),
              radius: 50,
            ),
          ),
        ),
      ),
    );
  }
  return results;
}
