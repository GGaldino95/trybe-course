def is_palindrome_iterative(word):
    if not word:
        return False

    first_index = 0
    last_index = len(word) - 1
    while last_index > first_index:
        if word[first_index] != word[last_index]:
            return False
        first_index += 1
        last_index -= 1

    return True
