function generateStateOptions(states) {
  const comboBox = document.getElementById('state-input');

  for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = states[i].state;
    option.value = states[i].initials;
    comboBox.appendChild(option);
  }
}

function checkDate() {
  const dateInput = document.getElementById('job-date-input');
  dateInput.addEventListener('blur', function () {
    let dateValue = dateInput.value;
    if (dateValue.substring(0,2) < 0 || dateValue.substring(0,2) > 31) {
      alert('Error! Enter a valid day between 0 and 31.');
    } else if (dateValue.substring(3,5) < 0 || dateValue.substring(3,5) > 12) {
      alert('Error! Enter a valid month between 0 and 12.');
    } else if (dateValue.substring(6) < 0 || isNaN(dateValue.substring(6))) {
      alert('Error! Enter a valid year greater than 0.');
    }
  })
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
  checkDate();
};
