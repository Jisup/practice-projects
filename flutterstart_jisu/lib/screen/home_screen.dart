import 'package:flutter/material.dart';
import 'package:flutter_start/model/model_movie.dart';
import 'package:flutter_start/widget/box_slider.dart';
import 'package:flutter_start/widget/carousel_slider.dart';
import 'package:flutter_start/widget/circle_slider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreen();
}

class _HomeScreen extends State<HomeScreen> {
  List<Movie> movies = [
    Movie.fromMap({
      "title": "사랑의 불시착",
      "keyword": "사랑/로맨스/판타지",
      "poster": "test_movie_1.png",
      "like": false
    }),
    Movie.fromMap({
      "title": "사랑의 불시착",
      "keyword": "사랑/로맨스/판타지",
      "poster": "test_movie_1.png",
      "like": false
    }),
    Movie.fromMap({
      "title": "사랑의 불시착",
      "keyword": "사랑/로맨스/판타지",
      "poster": "test_movie_1.png",
      "like": false
    }),
    Movie.fromMap({
      "title": "사랑의 불시착",
      "keyword": "사랑/로맨스/판타지",
      "poster": "test_movie_1.png",
      "like": false
    }),
  ];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        Stack(
          children: [
            CarouselMovies(movies: movies),
            TopBar(),
          ],
        ),
        CircleMovies(movies: movies),
        BoxMovies(movies: movies),
      ],
    );
  }
}

class TopBar extends StatelessWidget {
  const TopBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.fromLTRB(20, 7, 20, 7),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Image.asset(
              "lib/assets/bbongflix_logo.png",
              fit: BoxFit.contain,
              height: 25,
            ),
            Text(
              "TV 프로그램",
              style: TextStyle(fontSize: 14),
            ),
            Container(
              child: Text(
                "영화",
                style: TextStyle(fontSize: 14),
              ),
            ),
            Text(
              "내가 찜한 콘텐츠",
              style: TextStyle(fontSize: 14),
            ),
          ],
        ));
  }
}
