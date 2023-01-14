@JS()
library triangle;

import 'package:js/js.dart';

@JS('Triangle')
class Triangle{
  Triangle(int height, int width);
  external double calcArea();
}