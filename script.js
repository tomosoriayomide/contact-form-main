let firstName = document.getElementById("name1");
let LastName = document.getElementById("name2");
let email = document.getElementById("email");
let message = document.getElementById("inputs");
let checkbox = document.getElementById("check");
let errorState1 = document.getElementById("error1");
let errorState2 = document.getElementById("error2");
let errorStateMail = document.getElementById("errormail");
let errorStateQuery = document.getElementById("errorquery");
let errorStateMessage = document.getElementById("errormessage");
let errorStateCheck = document.getElementById("errorcheck");
let input = document.getElementById("query");
let submit = document.getElementById("submit");
// function validate() {
//   if (firstName.value === "") {
//     errorState1.style.display = "block";
//     submit.style.cursor = "no-drop";
//     firstName.style.borderColor = " hsl(0, 66%, 54%)";
//     submit.addEventListener("click", (e) => {
//       e.preventDefault();
//     });
//   }
//   firstName.addEventListener("input", () => {
//     submit.style.cursor = "pointer";
//     errorState1.style.display = "none";
//     firstName.style.borderColor = "  hsl(186, 15%, 59%)";
//   });
//   if (LastName.value === "") {
//     errorState2.style.display = "block";
//     submit.style.cursor = "no-drop";
//     LastName.style.borderColor = " hsl(0, 66%, 54%)";
//     // console.log(" hsl(0, 66%, 54%)");
//     submit.addEventListener("click", (e) => {
//       e.preventDefault();
//     });
//   }
//   LastName.addEventListener("input", () => {
//     submit.style.cursor = "pointer";
//     errorState2.style.display = "none";
//     LastName.style.borderColor = "  hsl(186, 15%, 59%)";
//     submit.addEventListener("click",(e)=>{
//       e.button
//     })
//   });
//   if (email.value === "") {
//     errorStateMail.style.display = "block";
//     email.style.borderColor = " hsl(0, 66%, 54%)";
//     submit.style.cursor = "no-drop";
//     submit.addEventListener("click", (e) => {
//       e.preventDefault();
//     });
//   }
//   email.addEventListener("input", () => {
//     submit.style.cursor = "pointer";
//     errorStateMail.style.display = "none";
//     email.style.borderColor = "  hsl(186, 15%, 59%)";
//   });
// const radios = document.querySelectorAll('input[name="query"]');
// const errorradio = document.getElementById("errorquery");
// radios.forEach((radio) => {
//   radio.addEventListener("change", () => {
//     if (!radio.checked) {
//       errorradio.style.display = "block";
//     }
//   });
//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//   });
// });
//   // // const radioButtons =document.querySelectorAll('input[type="radio"]')
//   // for (let radio of radioButtons) {
//   //   if (radio.checked===false)
//   //   submit.style.cursor = "no-drop";
//   //   errorStateQuery.style.display = "block";
//   //   console.log("first");
//   // }
//   // input.forEach((radio) => {
//   //   radio.addEventListener("change", () => {
//   //     errorStateQuery.style.display = "none";
//   //   });
//   // });
//   if (message.value === "") {
//     submit.style.cursor = "no-drop";
//     errorStateMessage.style.display = "block";
//     submit.addEventListener("click", (e) => {
//       e.preventDefault();
//     });
//     message.style.borderColor = " hsl(0, 66%, 54%)";
//   }
//   message.addEventListener("input", () => {
//     submit.style.cursor = "pointer";
//     errorStateMessage.style.display = "none";
//     message.style.borderColor = "  hsl(186, 15%, 59%)";
//   });
//   if (checkbox.checked === false) {
//     submit.style.cursor = "no-drop";
//     errorStateCheck.style.display = "block";
//     submit.addEventListener("click", (e) => {
//       if (!checkbox.checked) e.preventDefault();
//     });

//     checkbox.style.borderColor = " hsl(0, 66%, 54%)";
//     // console.log("first");
//   }
//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       errorStateCheck.style.display = "none";
//     }
//   });
//   checkbox.addEventListener("input", () => {
//     submit.style.cursor = "pointer";
//     errorStateCheck.style.display = "none";
//     checkbox.style.borderColor = "  hsl(186, 15%, 59%)";
//   });
//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       errorStateCheck.style.display = "none";
//     }
//   });

//   //   function name1(){/
//   // user=firstName.value;
//   //   }

//   //   console.log(name1, LastName.value);
//   //   console.log(email.value);
//   //   console.log(message.value);
//   save();
//   //  . localStorage(firstName.value);
// }
function validate(e) {
  let isValid = true;

  if (firstName.value.trim() === "") {
    errorState1.style.display = "block";
    firstName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (LastName.value.trim() === "") {
    errorState2.style.display = "block";
    LastName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (email.value.trim() === "") {
    errorStateMail.style.display = "block";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }
  const radios = document.querySelectorAll('input[name="query"]');
  const errorradio = document.getElementById("errorquery");

  let isRadioSelected = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      isRadioSelected = true;
    }
  });

  if (!isRadioSelected) {
    errorradio.style.display = "block";
    submit.style.cursor = "no-drop";
    submit.addEventListener("click", (e) => {
      e.preventDefault();
    });
  } else {
    errorradio.style.display = "none";
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      errorradio.style.display = "none";
      submit.style.cursor = "pointer";
    });
  });

  if (message.value.trim() === "") {
    errorStateMessage.style.display = "block";
    message.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!checkbox.checked) {
    errorStateCheck.style.display = "block";
    checkbox.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    save(); // Call your save function if all is well
  }
}

// Live input listeners to clear errors while typing
firstName.addEventListener("input", () => {
  if (firstName.value.trim() !== "") {
    errorState1.style.display = "none";
    firstName.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

LastName.addEventListener("input", () => {
  if (LastName.value.trim() !== "") {
    errorState2.style.display = "none";
    LastName.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

email.addEventListener("input", () => {
  if (email.value.trim() !== "") {
    errorStateMail.style.display = "none";
    email.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

message.addEventListener("input", () => {
  if (message.value.trim() !== "") {
    errorStateMessage.style.display = "none";
    message.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    errorStateCheck.style.display = "none";
    checkbox.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

submit.addEventListener("click", validate);
function validate(e) {
  let isValid = true;

  if (firstName.value.trim() === "") {
    errorState1.style.display = "block";
    firstName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (LastName.value.trim() === "") {
    errorState2.style.display = "block";
    LastName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (email.value.trim() === "") {
    errorStateMail.style.display = "block";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (message.value.trim() === "") {
    errorStateMessage.style.display = "block";
    message.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!checkbox.checked) {
    errorStateCheck.style.display = "block";
    checkbox.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    save();
  }
}

// Live input listeners to clear errors while typing
firstName.addEventListener("input", () => {
  if (firstName.value.trim() !== "") {
    errorState1.style.display = "none";
    firstName.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

LastName.addEventListener("input", () => {
  if (LastName.value.trim() !== "") {
    errorState2.style.display = "none";
    LastName.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

email.addEventListener("input", () => {
  if (email.value.trim() !== "") {
    errorStateMail.style.display = "none";
    email.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

message.addEventListener("input", () => {
  if (message.value.trim() !== "") {
    errorStateMessage.style.display = "none";
    message.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    errorStateCheck.style.display = "none";
    checkbox.style.borderColor = "hsl(186, 15%, 59%)";
  }
});

submit.addEventListener("click", validate);

function save() {
  let details = [];
  //   let add = [];
  const submit = {
    name: firstName.value,
    name2: LastName.value,
    email: email.value,
    message: message.value,
    //   };
    //   const more = {
    //     name: firstName.value,
    //     name2: LastName.value,
    //     email: email.value,
    //     message: message.value,
  };
  console.log(details);
  details.push(JSON.stringify(submit));
  // add.push(JSON.stringify(more));

  //   localStorage.setItem("details", details);
  //   localStorage.setItem("detail2",add)
}
// save();
// validate();

const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

if (!getCookie("visitedBefore")) {
  setCookie("visitedBefore", "yes", 30);
  console.log("First-time visitor");
} else {
  console.log("Returning visitor");
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("cont");
  // preloader.style.display = "flex";
  // content.style.display = "none";
  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "flex";
  }, 10000);
});

const form = document.getElementById("form");
const loader = document.getElementById("form-preloader");

form.addEventListener("submit", function (e) {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    form.reset();
  }, 7000);
});
  