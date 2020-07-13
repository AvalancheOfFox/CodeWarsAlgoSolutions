// Assume Kata is defined outside of project within CodeWars platform.

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
