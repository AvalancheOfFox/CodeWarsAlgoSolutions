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

  // Screen Size
  // 7kyu, https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/java

class Kata {
  public static String findScreenHeight(int width, String ratio) {
    String[] r = ratio.split(":");
    int height = width * Integer.valueOf(r[1]) / Integer.valueOf(r[0]);
    return width + "x" + height;
  }
}