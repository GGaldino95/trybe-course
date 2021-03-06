function generateStateOptions(states) {
    const comboBox = document.getElementById('state-input');
  
    for (let i = 0; i < states.length; i += 1) {
      const option = document.createElement('option');
      option.innerText = states[i].state;
      option.value = states[i].initials;
      comboBox.appendChild(option);
    }
  }
  
  function checkSubmit() {
    const submit = document.getElementById('submit-button');
    submit.addEventListener('click', checkDate);
  }
  
  function showSubmit() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function (e) {
      justValidate();
      const submitContainer = document.getElementById('submit-info');
      submitContainer.className = 'mt-5 p-2 border border-info rounded';

      const submitInfo = document.querySelectorAll('input, select, textarea');
      const infoDescription = ['Full name: ', 'E-mail: ', 'CPF: ', 'Address: ', 'City: ', 'State: ', 'Building type: ', '', 'Résumé info: ', 'Post: ', 'Job Description: ', 'Date started: '];
  
      for (let i = 0; i < submitInfo.length; i += 1) {
        if (submitInfo[i].type === 'radio' && !submitInfo[i].checked) {
          continue;
        }
        const info = document.createElement('p');
        info.className = 'text-info';
        info.innerText = infoDescription[i] + submitInfo[i].value
        submitContainer.appendChild(info);
      }
      //e.preventDefault();
    });
  }
  
  function checkDate(event) {
    const dateInput = document.getElementById('job-date-input');
    let dateValue = dateInput.value;
      if (dateValue.substring(0,2) < 0 || dateValue.substring(0,2) > 31) {
        event.preventDefault();
        alert('Error! Enter a valid day between 0 and 31.');
      } else if (dateValue.substring(3,5) < 0 || dateValue.substring(3,5) > 12) {
        event.preventDefault();
        alert('Error! Enter a valid month between 0 and 12.');
      } else if (dateValue.substring(6) < 0 || isNaN(dateValue.substring(6))) {
        event.preventDefault();
        alert('Error! Enter a valid year greater than 0.');
      }
  }
  
  function pickaday() {
    let field = document.getElementById('job-date-input');
    let picker = new Pikaday({
        onSelect: function(date) {
            field.value = picker.toString();
        }
    });
    field.parentNode.insertBefore(picker.el, field.nextSibling);
  }

  function justValidate() {
    new window.JustValidate(document.getElementById('form-content'), {
      Rules: {
        email: {
            required: true,
            email: true
        },
        checkbox: {
            required: true
        },
        name: {
            required: true,
            minLength: 3,
            maxLength: 15
        },
        text: {
            required: true,
            maxLength: 300,
            minLength: 5
        },
        password: {
            required: true,
            password: true,
            minLength: 4,
            maxLength: 8
        },
        zip: {
            required: true,
            zip: true
        },
        phone: {
            phone: true
        }
    }
  });

  new window.JustValidate(document.getElementById('form-content'), {
    Messages: {
      required: 'The field is required',
      email: 'Please, type a valid email',
      maxLength: 'The field must contain a maximum of :value characters',
      minLength: 'The field must contain a minimum of :value characters',
      password: 'Password is not valid',
      remote: 'Email already exists'
    },
  });
  }

  window.onload = function () {
    const states = [
      {
        state: 'Acre',
        initials: 'AC'
      },
      {
        state: 'Alagoas',
        initials: 'AL'
      },
      {
        state: 'Amapá',
        initials: 'AP'
      },
      {
        state: 'Amazonas',
        initials: 'AM'
      },
      {
        state: 'Bahia',
        initials: 'BA'
      },
      {
        state: 'Ceará',
        initials: 'CE'
      },
      {
        state: 'Espírito Santo',
        initials: 'ES'
      },
      {
        state: 'Goiás',
        initials: 'GO'
      },
      {
        state: 'Maranhão',
        initials: 'MA'
      },
      {
        state: 'Mato Grosso',
        initials: 'MT'
      },
      {
        state: 'Mato Grosso do Sul',
        initials: 'MS'
      },
      {
        state: 'Minas Gerais',
        initials: 'MG'
      },
      {
        state: 'Pará',
        initials: 'PA'
      },
      {
        state: 'Paraíba',
        initials: 'PB'
      },
      {
        state: 'Paraná',
        initials: 'PR'
      },
      {
        state: 'Pernambuco',
        initials: 'PE'
      },
      {
        state: 'Piauí',
        initials: 'PI'
      },
      {
        state: 'Rio de Janeiro',
        initials: 'RJ'
      },
      {
        state: 'Rio Grande do Norte',
        initials: 'RN'
      },
      {
        state: 'Rio Grande do Sul',
        initials: 'RS'
      },
      {
        state: 'Rondônia',
        initials: 'RO'
      },
      {
        state: 'Roraima',
        initials: 'RR'
      },
      {
        state: 'Santa Catarina',
        initials: 'SC'
      },
      {
        state: 'São Paulo',
        initials: 'SP'
      },
      {
        state: 'Sergipe',
        initials: 'SE'
      },
      {
        state: 'Tocantins',
        initials: 'TO'
      },
      {
        state: 'Distrito Federal',
        initials: 'DF'
      }
    ];
    generateStateOptions(states);
    //checkSubmit(); No longer needed since I'm using pikaday.
    showSubmit();
    pickaday();
  };