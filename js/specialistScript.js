  const loadSpecialist = (name) => {

    removeRow('table-row');

  const items = JSON.parse(localStorage.getItem('clientData')) && JSON.parse(localStorage.getItem('clientData'));
    items["clients"].map(person => {
      if(person.specialist === name) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', 'table-row');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');

        var button = document.createElement('input');

        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Aptarnauti');

        button.onclick = () => {
          person.state = 'Aptarnautas';
          td3.textContent = 'Aptarnautas';
          localStorage.setItem('clientData', JSON.stringify(items));
        }

        td1.className = "cell100 column";
        td2.className = "cell100 column";
        td3.className = "cell100 column";
        td4.className = "cell100 column";
        td1.textContent = person.name;
        td2.textContent = person.number;
        td3.textContent = person.state;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(button);
        document.getElementById('table-body').appendChild(tr);

      }
    });
  }

  function changeState(oButton) {
    console.log(oButton);
    // let tableRow = document.getElementById('table-row');
    // tableRow.parentNode.removeChild(oButton.parentNode);
}

const removeRow = (id) => {
  while(document.getElementById(id)){
    let tableRow = document.getElementById(id);
    tableRow.parentNode.removeChild(tableRow);
  }
}
