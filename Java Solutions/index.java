// Assume Classes are defined outside of project within CodeWars platform.

// Kata: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/java
// 8 kyu, Count of positives / sum of negatives

public class Kata {
  public static int[] countPositivesSumNegatives(int[] input) {
    int[] empty = {};
    if (input == null || input.length < 1) {
      return empty;
    }
    int[] answerArr = { 0, 0 };
    for (int num : input) {
      if (num > 0) {
        answerArr[0] += 1;
      }
      if (num < 0) {
        answerArr[1] += num;
      }
    }
    System.out.println(answerArr);
    return answerArr; // return an array with count of positives and sum of negatives
  }
}

// Refactor

public class Kata {
  public static int[] countPositivesSumNegatives(int[] input) {

    if (input == null || input.length < 1) {
      return new int[] {};
    }
    int count = 0, sum = 0;
    for (int num : input) {
      if (num > 0) {
        count++;
      }
      if (num < 0) {
        sum += num;
      }
    }
    return new int[] { count, sum };
  }
}

// Century From Year
// 8 kyu, https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/java

public class Solution {
  public static int century(int number) {
    if (number % 100 == 0) {
      return (number / 100);
    } else {
      int x = number / 100 + 1;
      return x;
    }
  }
}

// Refactor

public class Solution {
  public static int century(int number) {
    return (number + 99) / 100;
  }
}

// Yes or No
// 8kyu, https://www.codewars.com/kata/53369039d7ab3ac506000467/train/java
class YesOrNo {
  public static String boolToWord(boolean b) {
    if (b == true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  // Refactor to ternary
  class YesOrNo {
    public static String boolToWord(boolean b) {
      return b ? "Yes" : "No";
    }
  }

  // get Character from ASCII value
  // 8kyu, https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/java

  public class Ascii {
    public static char getChar(int c) {
      char ascii = (char) c;
      return ascii;
    }
  }

  // refactor to type cast without temp var
  public class Ascii {
    public static char getChar(int c) {
      return (char) c;
    }
  }

  // String repeat
  // 8kyu, https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/java
  public class Solution {
    public static String repeatStr(final int repeat, final String string) {
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < repeat; i++) {
        sb.append(string);
      }
      return sb.toString();
    }
  }

  // 8kyu, Convert a string to an array
  // https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/java
  public class Solution {

    public static String[] stringToArray(String s) {
      String[] arr = s.split(" ");
      return arr;
    }

  }

  // refactor
  public class Solution {

    public static String[] stringToArray(String s) {
      return arr = s.split(" ");
    }

  }

  // Screen Size
  // 7kyu, https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/java

class Kata {
  public static String findScreenHeight(int width, String ratio) {
    String[] r = ratio.split(":");
    int height = width * Integer.valueOf(r[1]) / Integer.valueOf(r[0]);
    return width + "x" + height;
  }
}