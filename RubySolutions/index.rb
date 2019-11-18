# Ruby Solutions to CodeWars Katas 


##################### 6th Kyu Katas ############################## 

# Kata: Count the Smiley Faces
# 6kyu, https://www.codewars.com/kata/583203e6eb35d7980400002a
def count_smileys(arr)
    eyes = ':;'
    nose = '-~'
    mouth =')D'
arr.select {|x|
  (
  x[1] = " " if x[1] == nil
  x[2] = '' if x[2] == nil
  eyes.include?(x[0]) && mouth.include?(x[1])) || (eyes.include?(x[0]) && nose.include?(x[1]) && mouth.include?(x[2]))
  }.count
end

##################### 7th Kyu Katas ############################## 


# Kata: Simple Fun #176 Reverse Letter
# 7 kyu, https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/ruby
def reverse_letter(string)
  string.gsub( /[^a-z]/, '').reverse
end

# Kata: Sum of All The Multiples of 3 or 5
# 7 kyu, https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
def find(n)
(1..n).select { |n| n % 3 == 0 || n % 5 == 0 }.sum
end

# Kata: Sum of a Sequence
# 7 kyu, https://www.codewars.com/kata/586f6741c66d18c22800010a
def sequence_sum(begin_number, end_number, step)
    (begin_number..end_number).step(step).sum
end

# Kata: Printer Errors
# 7 kyu, https://www.codewars.com/kata/56541980fa08ab47a0000040
def printer_error(s)
good = s.count 'abcdefghijklm'
bad = s.count 'nopqrstuvwxyz'
(s.count "nopqrstuvwxyz").to_s ? "#{bad}/#{s.length}" : "0/#{good}"
	# your code
end

# Kata: Mumbling
# 7 kyu, https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
def accum(s)
    s.chars.map.each_with_index {|char, i| (char*(i+1)).capitalize}.join('-')
end

# Kata: Breaking Chocolate
# 7 kyu, https://www.codewars.com/kata/534ea96ebb17181947000ada
def break_chocolate(n, m)
   choco = (n*m) - 1
  if choco < 0
  choco += 1
  end
  return choco
end

# Kata: Small Enough?
# 7 kyu, https://www.codewars.com/kata/57cc981a58da9e302a000214
def small_enough(a, limit)
    a.all?{|x| x<= limit}
end

# Kata: Get the Middle Character
# 7 kyu, https://www.codewars.com/kata/56747fd5cb988479af000028
def get_middle(s)
    if s.length.even?
        return s[((s.length/2)-1)]+s[(s.length/2)]
    else
        return s[s.length/2]
    end
end

# Kata: Enumerable Magic #5 - True for Just One?
# 7 kyu, https://www.codewars.com/kata/54599705cbae2aa60b0011a4
def one? list, &block
    list.one?(&block)
end

# Kata: String Ends With? 
# 7 kyu, https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
def solution(str, ending)
    str.ends_with?(ending)
end


##################### 8th Kyu Katas ############################## 

# Kata: Multiply
# 8 kyu, https://www.codewars.com/kata/50654ddff44f800200000004
def multiply(a, b)
  c = a * b
  return c
end

# Kata: Sum of Positive
# 8 kyu, https://www.codewars.com/kata/5715eaedb436cf5606000381

    #initial 
def positive_sum(arr)
  i = 0
  sum = 0
  while i < arr.length
    if arr[i] >= 0
      sum = arr[i] + sum
    end
    i += 1
  end
  return sum
end

    # refactor
def positive_sum(arr)
 arr.select{|num| num > 0}.reduce(0, :+)
end


# Kata: String Repeat
# 8 kyu, https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
def repeat_str(n,s)
    s*n
end

# Kata: Is he gonna survive?
# 8 kyu, https://www.codewars.com/kata/59ca8246d751df55cc00014c
def hero(bullets, dragons)
    bullets/dragons >= 2
end

# Kata: Count Odd Numbers below n
# 8 kyu, https://www.codewars.com/kata/59342039eb450e39970000a6
def oddCount(n)
    count = (n/2.round)
    return count
end

# Kata: Lost Without A Map
# 8 kyu, https://www.codewars.com/kata/57f781872e3d8ca2a000007e
def maps(x)
  x.map {|x| x*2}
end

# Kata: Enumerable Magic #2 - True for Any?
# 8 kyu, https://www.codewars.com/kata/54598e89cbae2ac001001135
def any? list, &block
  list.any?(&block)
end

# Kata: Enumerable Magic #4 - True for None?
# 8 kyu, https://www.codewars.com/kata/545993ee52756d98ca0010e1
def none? list, &block
  list.none?(&block)
end

# Kata: Enumerable Magic #3 - Does My List Include This?
# 8 kyu, https://www.codewars.com/kata/545991b4cbae2a5fda000158
def include? array, item
  array.include?(item)
end

# Kata: Enumerable Magic #28 - The Least and Greatest Part 2
# 8 kyu, https://www.codewars.com/kata/545b127c85166a9fe2001431
def minmax_by list, &block
  list.minmax_by(&block)
end

# Kata: Squash the Bugs
# 8 kyu, https://www.codewars.com/kata/56f173a35b91399a05000cb7
def find_longest(string)
  spl = string.split(" ")
  longest = 0
  i=0
  while i < spl.length
  if spl[i].length > longest then longest = spl[i].length
  end
  i += 1
  end
  return longest
end

# Kata: Convert Boolean Values to 'Yes' or 'No'
# 8 kyu, https://www.codewars.com/kata/53369039d7ab3ac506000467
def bool_to_word (bool)
  if bool == true
      return 'Yes'
    elsif bool != true
      return 'No'
    end
end

# Kata: Count of Positives/Sum of Negatives
# 8 kyu, https://www.codewars.com/kata/576bb71bbbcf0951d5000044

# initial
def count_positives_sum_negatives(lst)
  pos_count = 0
  neg_count = 0
 lst.each do |x|
  if x < 0
    neg_count += x
  elsif x > 0
    pos_count += 1
  end
 end
  if lst == []
    return []
  else
    return [pos_count, neg_count]
  end
end


# Kata: Century from Year
# 8 kyu, https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
def century(year)
    return century = ((year-1)/100) + 1
end

# Kata: Get Character from ASCII Value
# 8 kyu, https://www.codewars.com/kata/55ad04714f0b468e8200001c
def getChar(c)
    c.chr
end

# Kata: Can we Divide It?
# 8 kyu, https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
def is_divide_by(number, a, b)
  if number % a == 0 && number % b == 0
    return true
  else
    return false
  end
end