
  const loadSpecialist = (name) => {
  const items = JSON.parse(localStorage.getItem('clientData')) ? JSON.parse(localStorage.getItem('clientData')) : "No clients";
    // items["specialists"].map(person => {
    //   const th = document.createElement('th');
    //   th.className = "cell100 column";
    //   th.textContent = person.name;
    //   document.getElementById('table-head').appendChild(th);
    // });
    items["clients"].map(person => {
      if(person.name === name) {
        const tr = document.createElement('tr');
        for(let i in person){
          const td = document.createElement('td');
          td.className = "cell100 column";
          td.textContent = i;
        }
        tr.appendChild(td1);
        document.getElementById('table-body').appendChild(tr);
        // document.getElementById('table-body').appendChild(td2);
      }
    });
  }
