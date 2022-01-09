def validate_words(first_word, second_word):
    first_string_unicode_sum = 0
    second_string_unicode_sum = 0

    # soma os valores Unicode de cada caractere
    for character in first_word:
        first_string_unicode_sum += ord(character)

    # soma os valores Unicode de cada caractere
    for character in second_word:
        second_string_unicode_sum += ord(character)

    # caso a soma do Unicode das duas palavras seja a mesma,
    # possivelmente elas são anagramas
    if first_string_unicode_sum == second_string_unicode_sum:
        return True


def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    is_anagram = False
    if validate_words(first_string, second_string):
        for character in second_string:
            if first_string.__contains__(character):
                is_anagram = True
            else:
                is_anagram = False

    return is_anagram
