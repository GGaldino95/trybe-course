def study_schedule(permanence_period, target_time):
    if not target_time:
        return None

    students_count = 0
    for (hour_in, hour_out) in permanence_period:
        if hour_in and hour_out:
            if hour_out >= target_time >= hour_in:
                students_count += 1
        else:
            return None

    return students_count
