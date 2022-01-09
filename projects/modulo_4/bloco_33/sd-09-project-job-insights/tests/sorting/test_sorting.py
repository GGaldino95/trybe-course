from src.sorting import sort_by


def test_sort_by_criteria():
    jobs = [
        {
            "id": 1,
            "min_salary": 1000,
            "max_salary": 2999,
            "date_posted": "1995-24-09",
        },
        {
            "id": 2,
            "min_salary": 3000,
            "max_salary": 4555,
            "date_posted": "1999-24-09",
        },
        {
            "id": 3,
            "min_salary": 1500,
            "max_salary": 2500,
            "date_posted": "1997-24-09",
        },
    ]

    posted_date_ordered = [jobs[1], jobs[2], jobs[0]]
    max_wage = [jobs[1], jobs[0], jobs[2]]
    min_wage = [jobs[2], jobs[0], jobs[1]]

    sort_by(jobs, "min_salary")
    assert jobs == min_wage
    sort_by(jobs, "max_salary")
    assert jobs == max_wage
    sort_by(jobs, "date_posted")
    assert jobs == posted_date_ordered
