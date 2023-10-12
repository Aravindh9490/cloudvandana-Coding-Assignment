# 1 Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import random


original_array = [1, 2, 3, 4, 5, 6, 7]


def custom_shuffle(arr):
    for i in range(len(arr) - 1, 0, -1):
        j = random.randint(0, i)
        arr[i], arr[j] = arr[j], arr[i]


custom_shuffle(original_array)


print(original_array)


#2 Enter a Roman Number as input and convert it to an integer. (Example: IX = 9)

def roman_to_int(roman_numeral):
    roman_dict = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    }
    result = 0
    prev_value = 0

    for numeral in reversed(roman_numeral):
        value = roman_dict[numeral]
        if value < prev_value:
            result -= value
        else:
            result += value
        prev_value = value

    return result


roman_numeral = "XI"

integer_value = roman_to_int(roman_numeral)
print(integer_value)

#3 Check if the input is pangram or not. (A pangram is a sentence that contains all the alphabets from A to Z)

def is_pangram(input_string):
    alphabet_set = set('abcdefghijklmnopqrstuvwxyz')
    input_string = input_string.lower().replace(" ", "")
    return set(alphabet_set).issubset(input_string)


input_string = "The quick brown fox jumps over the lazy dog"

if is_pangram(input_string):
    print("The input is a pangram.")
else:
    print("The input is not a pangram.")
    



