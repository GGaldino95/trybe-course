function generateStateOptions(states) {
  const comboBox = document.getElementById('state-input');

  for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = states[i].state;
    option.value = states[i].initials;
    comboBox.appendChild(option);
  }
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
};