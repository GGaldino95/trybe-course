def find_duplicate(nums):
    for index_one, primary_number in enumerate(nums):
        if type(primary_number) == str or primary_number < 0:
            return False

        for index_two, secondary_number in enumerate(nums):
            # "index_one != index_two" pra não comparar com o próprio elemento
            if primary_number == secondary_number and index_one != index_two:
                return nums[index_two]

    return False
