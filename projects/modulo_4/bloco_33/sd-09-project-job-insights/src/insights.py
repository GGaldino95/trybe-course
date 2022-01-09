from src.jobs import read


def get_unique_job_types(path):
    jobs_list = read(path)
    jobs_around = set()
    for jobs in jobs_list:
        jobs_around.add(jobs["job_type"])
    return jobs_around


def filter_by_job_type(jobs, job_type):
    job_list = []
    for job in jobs:
        if (job['job_type'] == job_type):
            job_list.append(job)
    return job_list


def get_unique_industries(path):
    jobs_list = read(path)
    jobs_around = set()
    for jobs in jobs_list:
        if (jobs['industry'] != ''):
            jobs_around.add(jobs['industry'])
    return jobs_around


def filter_by_industry(jobs, industry):
    job_list = []
    for job in jobs:
        if (job['industry'] == industry):
            job_list.append(job)
    return job_list


def get_max_salary(path):
    jobs_list = read(path)
    jobs_around = set()
    for jobs in jobs_list:
        if (jobs['max_salary'].isdigit()):
            jobs_around.add(int(jobs['max_salary']))
    job_max_value = max(jobs_around, key=int)
    return job_max_value


def get_min_salary(path):
    jobs_list = read(path)
    jobs_around = set()
    for jobs in jobs_list:
        if (jobs['min_salary'].isdigit()):
            jobs_around.add(int(jobs['min_salary']))
    job_min_value = min(jobs_around, key=int)
    return job_min_value


def matches_salary_range(job, salary):
    if not ((
        isinstance(job.get('min_salary'), int)
        and isinstance(job.get('max_salary'), int))
    ):
        raise ValueError('ERRO! Favor conferir salarios minimo e maximo')
    if not isinstance(salary, int):
        raise ValueError('ERRO! Tipo invalido de salary')
    if (
        'min_salary' not in job
        and 'max_salary' not in job
    ):
        raise ValueError('ERRO! Ausencia de salarios minimo ou maximo')
    if job['min_salary'] > job['max_salary']:
        raise ValueError('ERRO! Salario minimo maior que salario maximo')
    check = int(job['min_salary']) <= salary <= int(job['max_salary'])

    return check


def filter_by_salary_range(jobs, salary):
    job_list = []
    for job in jobs:
        try:
            if (matches_salary_range(job, salary)):
                job_list.append(job)
        except Exception:
            print('ERRO!')

    return job_list
