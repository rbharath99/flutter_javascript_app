@JS()
library rectangle;

import 'package:js/js.dart';

@JS("Rectangle")
class Rectangle {
  external Rectangle(int height, int width);
  external int calcArea();
  external int calcPerimeter();
}