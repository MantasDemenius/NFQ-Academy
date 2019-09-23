window.onload = () => {
  const items = JSON.parse(localStorage.getItem('clientData'));
  // items["specialists"].map(person => {
  //   const th = document.createElement('th');
  //   th.className = "cell100 column";
  //   th.textContent = person.name;
  //   document.getElementById('table-head').appendChild(th);
  // });
  items["clients"].map(person => {
    if(person.state === 'Neaptarnautas') {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.className = "cell100 column";
      td2.className = "cell100 column";
      td1.textContent = person.specialist;
      td2.textContent = person.number;
      tr.appendChild(td1);
      tr.appendChild(td2);
      document.getElementById('table-body').appendChild(tr);
      // document.getElementById('table-body').appendChild(td2);
    }
  });
}
