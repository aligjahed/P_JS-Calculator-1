// Test Line
console.log("It's Working");

// Calls
const view = document.querySelector(".view");
const preview = document.querySelector(".preview");
const inputOp = document.querySelector(".inputOp");

// Variables
let viewNum = "0";
let temp = "0";
let result = 0;
let tempOp = "0";

// Checks user Input
function input(usrInput) {
  switch (usrInput) {
    case "num_1":
      changeView("1");
      break;

    case "num_2":
      changeView("2");
      break;

    case "num_3":
      changeView("3");
      break;

    case "num_4":
      changeView("4");
      break;

    case "num_5":
      changeView("5");
      break;

    case "num_6":
      changeView("6");
      break;

    case "num_7":
      changeView("7");
      break;

    case "num_8":
      changeView("8");
      break;

    case "num_9":
      changeView("9");
      break;

    case "num_0":
      changeView("0");
      break;

    case "op_del":
      operation("x");
      break;

    case "op_reset":
      operation("c");
      break;

    case "op_add":
      operation("+");
      break;

    case "op_sub":
      operation("-");
      break;

    case "op_mul":
      operation("*");
      break;

    case "op_div":
      operation("/");
      break;

    case "op_acc":
      operation("=");
      break;

    default:
      break;
  }
}

// Input nser numbers to the view
function changeView(num) {
  if (viewNum.length < 11) {
    if (viewNum == "0") {
      viewNum = num;
      view.innerHTML = viewNum;
    } else {
      viewNum += num;
      view.innerHTML = viewNum;
    }
  }
}

// Checks for input operations and execute them
function operation(op) {
  switch (op) {
    case "x":
      remove();
      break;

    case "c":
      reset();
      break;

    case "+":
      add();
      break;

    case "-":
      sub();
      break;

    case "*":
      mul();
      break;

    case "/":
      div();
      break;

    case "=":
      accept();
      break;

    default:
      break;
  }
}

// Backspace
function remove() {
  if (viewNum != "0") {
    viewNum = viewNum.substring(0, viewNum.length - 1);
    view.innerHTML = viewNum;
  }
}

// Reset Calculator to 0
function reset() {
  viewNum = "0";
  temp = "0";
  tempOp = "";
  preview.innerHTML = temp;
  view.innerHTML = viewNum;
}

function add() {
  tempOp = "+";
  inputOp.innerHTML = tempOp;

  if (temp == "0") {
    temp = viewNum;
    viewNum = "0";
    preview.innerHTML = temp;
    view.innerHTML = viewNum;
  }
}

function sub() {
  tempOp = "-";
  inputOp.innerHTML = tempOp;

  if (temp == "0") {
    temp = viewNum;
    viewNum = "0";
    preview.innerHTML = temp;
    view.innerHTML = viewNum;
  }
}

function mul() {
  tempOp = "*";
  inputOp.innerHTML = tempOp;

  if (temp == "0") {
    temp = viewNum;
    viewNum = "0";
    preview.innerHTML = temp;
    view.innerHTML = viewNum;
  }
}

function div() {
  tempOp = "/";
  inputOp.innerHTML = tempOp;

  if (temp == "0") {
    temp = viewNum;
    viewNum = "0";
    preview.innerHTML = temp;
    view.innerHTML = viewNum;
  }
}

function accept() {
  if (temp == "0") {
    view.innerHTML = viewNum;
  } else if (temp !== "0" && viewNum == "0") {
    viewNum = "0";
    view.innerHTML = viewNum;
  } else if (temp !== "0" && viewNum !== "0") {
    switch (tempOp) {
      case "+":
        resultCalc("+");
        viewNum = result;
        view.innerHTML = viewNum;
        temp = "0";
        preview.innerHTML = temp;
        break;

      case "-":
        resultCalc("-");
        viewNum = result;
        view.innerHTML = viewNum;
        temp = "0";
        preview.innerHTML = temp;
        break;

      case "*":
        resultCalc("*");
        viewNum = result;
        view.innerHTML = viewNum;
        temp = "0";
        preview.innerHTML = temp;
        break;

      case "/":
        resultCalc("/");
        viewNum = result.toFixed(4);
        view.innerHTML = viewNum;
        temp = "0";
        preview.innerHTML = temp;
        break;

      default:
        break;
    }
  }
}

function resultCalc(req) {
  switch (req) {
    case "+":
      result = parseInt(temp) + parseInt(viewNum);
      break;

    case "-":
      result = parseInt(temp) - parseInt(viewNum);
      break;

    case "*":
      result = parseInt(temp) * parseInt(viewNum);
      break;

    case "/":
      result = parseInt(temp) / parseInt(viewNum);

    default:
      break;
  }
}
