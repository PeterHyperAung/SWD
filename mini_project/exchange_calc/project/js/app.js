let input = document.getElementById("input");
let result = document.getElementById("result");
let from = document.getElementById("from");
let to = document.getElementById("to");
let table = document.querySelector("table.history");
let historyList = document.getElementById("historyList");
let count = 0;

function show() {
  if (localStorage.getItem("record")) {
    historyList.innerHTML = localStorage.getItem("record");
  } else {
    historyList.innerHTML = `<tr id='rowSpacer'><td colspan="5" style='text-align: center'>There is no Record</td></tr>`;
  }
}

show();

function createOption(x, y, z) {
  let o = document.createElement("option");
  let t = document.createTextNode(y);
  o.setAttribute("value", z);
  o.appendChild(t);
  x.appendChild(o);
}

function toNum(x) {
  return x.replace(",", "");
}

for (x in data.rates) {
  createOption(from, x, toNum(data.rates[x]));
  createOption(to, x, toNum(data.rates[x]));
}

document.getElementById("calc").addEventListener("click", function (e) {
  e.preventDefault();
  // get state
  let x = input.value;
  let y = from.value;
  let z = to.value;
  console.log(x, y, z);

  // process
  let fromText = x + " " + from.options[from.selectedIndex].innerText;
  let toText = to.options[to.selectedIndex].innerText;
  let first = x * y;
  let second = first / z;
  second = second.toFixed(2);
  console.log(second);
  let date = new Date().toLocaleString();
  let arr = [date, fromText, toText, second];
  createTr(arr);
  store();

  // set state
  result.innerText = second;
  input.value = "";
  from.value = "";
  to.value = "1";
  input.focus();
});

function store() {
  localStorage.setItem("record", historyList.innerHTML);
}
function test() {
  console.log(from.options[from.selectedIndex].innerText);
}

function createTr(x) {
  let rowSpacer = document.getElementById("rowSpacer");
  if (rowSpacer) {
    rowSpacer.remove();
  }
  let tr = document.createElement("tr");
  x.map(function (el) {
    let td = document.createElement("td");
    let text = document.createTextNode(el);
    td.appendChild(text);
    tr.appendChild(td);
  });

  let td2 = document.createElement("td");
  let btn = document.createElement("button");
  let t = document.createTextNode("Delete");

  btn.append(t);
  btn.classList.add("btn-danger");
  btn.setAttribute("onclick", `del(${count})`);
  td2.classList.add("center");
  td2.appendChild(btn);
  tr.append(td2);
  tr.classList.add(`list-${count}`);

  historyList.appendChild(tr);
  count++;
}

function del(idx) {
  let el = document.querySelector(".list-" + idx);
  el.remove();
  localStorage.setItem("record", historyList.innerHTML);
  show();
}

function clearAll() {
  localStorage.clear();
  historyList.innerHTML = "";
  show();
  count = 0;
}

function changeMode(){
  document.body.classList.toggle("night-mode")
  if(localStorage.getItem('mode') === 'black'){
    localStorage.setItem("mode", 'white');
  }else{
    localStorage.setItem("mode", 'black');
  }
}

let togglerBtn = document.getElementById("toggler");

togglerBtn.addEventListener('click', changeMode)