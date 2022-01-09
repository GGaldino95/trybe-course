def is_palindrome_recursive(word, low_index, high_index):
    if not word:
        return False

    if len(word) == 1:
        return True

    if word[low_index] == word[high_index]:
        return (
            True
            if low_index > high_index
            else is_palindrome_recursive(word, low_index + 1, high_index - 1)
        )
    else:
        return False
