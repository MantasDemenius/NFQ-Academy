
  const loadSpecialist = (name) => {

    while(document.getElementById('table-row')){
      let tableRow = document.getElementById('table-row');
      tableRow.parentNode.removeChild(tableRow);
    }

  const items = JSON.parse(localStorage.getItem('clientData')) && JSON.parse(localStorage.getItem('clientData'));
    // items["specialists"].map(person => {
    //   const th = document.createElement('th');
    //   th.className = "cell100 column";
    //   th.textContent = person.name;
    //   document.getElementById('table-head').appendChild(th);
    // });
    items["clients"].map(person => {
      if(person.specialist === name) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', 'table-row');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.className = "cell100 column";
        td2.className = "cell100 column";
        td3.className = "cell100 column";
        td1.textContent = person.name;
        td2.textContent = person.number;
        td3.textContent = person.state;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById('table-body').appendChild(tr);
        // document.getElementById('table-body').appendChild(td2);
      }
    });
  }
