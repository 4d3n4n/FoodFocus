const seeProfilButton = document.querySelector(".edit-profile-text");
const profilPopUp = document.querySelector(".profile-pop-up-container");
const closeProfilPopUp = document.querySelector(".profile-close-pop-up");

seeProfilButton.addEventListener("click", () => {
  profilPopUp.classList.add("show");
});
closeProfilPopUp.addEventListener("click", () => {
  profilPopUp.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const genderCheckbox = document.getElementById("checkbox");
  const userSex = window.userSex;
  const maleImages = document.querySelectorAll(".avatar.male-avatar");
  const femaleImages = document.querySelectorAll(".avatar.female-avatar");
  const userAvatar = window.userAvatar;
  const downButton = document.querySelector(".down-button");
  const upButton = document.querySelector(".up-button");

  // Cocher le genderCheckbox en fonction du sexe de l'utilisateur
  if (userSex.toLowerCase() === 'f') {
    genderCheckbox.checked = true;
  } else if (userSex.toLowerCase() === 'h') {
      genderCheckbox.checked = false;
  }

  // Détermine si l'avatar est masculin ou féminin et sélectionne l'index approprié
  let isMale = userAvatar.startsWith('man');
  let avatarIndex = isMale ? userAvatar.replace('man-', '') : userAvatar.replace('woman-', '');
  avatarIndex = parseInt(avatarIndex, 10) - 1; // Convertit en index (base 0)

  // Afficher uniquement le premier avatar masculin par défaut
  if (isMale) {
    maleImages.forEach((image, index) => {
      if (index !== avatarIndex) {
        image.style.display = "none";
      } else {
        image.style.display = "block";
      }
    });
    femaleImages.forEach((image) => {
      image.style.display = "none";
    });
  } else {
    femaleImages.forEach((image, index) => {
      if (index !== avatarIndex) {
        image.style.display = "none";
      } else {
        image.style.display = "block";
      }
    });
    maleImages.forEach((image) => {
      image.style.display = "none";
    });
  }
  
  showDivs(avatarIndex + 1); // Affiche le premier avatar (index 1)

  genderCheckbox.addEventListener("change", function () {
    if (genderCheckbox.checked) {
      maleImages.forEach(img => img.style.display = 'none');
      femaleImages.forEach(img => img.style.display = 'none');
      femaleImages[avatarIndex].style.display = 'block';
      slideIndex = avatarIndex + 1;
    } else {
      femaleImages.forEach(img => img.style.display = 'none');
      maleImages.forEach(img => img.style.display = 'none');
      maleImages[avatarIndex].style.display = 'block';
      slideIndex = avatarIndex + 1;
    }
  });  

  downButton.addEventListener("click", function () {
    plusDivs(-1);
  });

  upButton.addEventListener("click", function () {
    plusDivs(1);
  });
});

let slideIndex = 1;

function resetSlideIndex() {
  slideIndex = 1;
  showDivs(slideIndex);
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let x;
  if (document.getElementById("checkbox").checked) {
    x = document.querySelectorAll(".avatar.female-avatar");
  } else {
    x = document.querySelectorAll(".avatar.male-avatar");
  }

  if (n > x.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = x.length;
  } else {
    slideIndex = n;
  }

  x.forEach(img => img.style.display = 'none'); // Cacher tous les avatars
  x[slideIndex - 1].style.display = 'block'; // Afficher l'avatar actif
}





// EDIT - CANCEL - SAVE
const editInfoConnection = document.querySelector(".edit-connection-info");
const editInfoPerso = document.querySelector(".edit-infos-perso");
const editActivity = document.querySelector(".edit-activite");
const editGender = document.querySelector(".edit-gender");

const cancelInfoConnection = document.querySelector(".cancel-connection-info");
const cancelInfoPerso = document.querySelector(".cancel-infos-perso");
const cancelActivity = document.querySelector(".cancel-activite");
const cancelGender = document.querySelector(".cancel-gender");

const saveInfoConnection = document.querySelector(".save-connection-info");
const saveInfoPerso = document.querySelector(".save-infos-perso");
const saveActivity = document.querySelector(".save-activite");
const saveGender = document.querySelector(".save-gender");

const editInfoButtons = document.querySelectorAll(".edit-info-button");
const cancelInfoButtons = document.querySelectorAll(".cancel-button");
const saveButtons = document.querySelectorAll(".save-button");

const iconsActivity = document.querySelectorAll(".activities-icon");
const activityInputs = document.querySelectorAll(".activity-input");
const genderButtons = document.querySelectorAll(".gallery-button");

const genderSwitch = document.querySelector(".toggle-button-cover");
const newMdpContainer = document.querySelector(".new-password-container");

function editField(element) {
  element.addEventListener("click", () => {
    let infoContainer = element.parentElement.parentElement.parentElement;
    infoContainer.classList.add("edit-mode");

    let iconContainer = element.parentElement;
    iconContainer.children[0].classList.add("hide-icon");
    iconContainer.children[1].classList.add("reveal");
    iconContainer.children[2].classList.add("reveal");

    if (element === editActivity) {
      iconsActivity.forEach((icon) => {
        icon.classList.remove("activity-disabled");
      });
      activityInputs.forEach((input) => {
        input.disabled = false;
      });
    } else if (element === editInfoConnection) {
      newMdpContainer.classList.remove("hide-new-mdp");
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = false;
      });
    } else if (element === editGender) {
      genderSwitch.classList.remove("hide-gender-switch");
      genderButtons.forEach((button) => {
        button.disabled = false;
      });
    } else {
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = false;
      });
    }
  });
}
editInfoButtons.forEach((editInfoButton) => {
  editField(editInfoButton);
});

function cancelEdit(element) {
  element.addEventListener("click", () => {
    let infoContainer = element.parentElement.parentElement.parentElement;
    infoContainer.classList.remove("edit-mode");

    let iconContainer = element.parentElement;
    iconContainer.children[0].classList.remove("hide-icon");
    iconContainer.children[1].classList.remove("reveal");
    iconContainer.children[2].classList.remove("reveal");

    if (element === cancelActivity) {
      iconsActivity.forEach((icon) => {
        icon.classList.add("activity-disabled");
      });
      activityInputs.forEach((input) => {
        input.disabled = true;
      });
    } else if (element === cancelInfoConnection) {
      newMdpContainer.classList.add("hide-new-mdp");
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = true;
      });
    } else if (element === cancelGender) {
      genderSwitch.classList.add("hide-gender-switch");
      genderButtons.forEach((button) => {
        button.disabled = true;
      });
    } else {
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = true;
      });
    }
  });
}
cancelInfoButtons.forEach((cancelInfoButton) => {
  cancelEdit(cancelInfoButton);
});

function saveEdit(element) {
  element.addEventListener("click", () => {
    let infoContainer = element.parentElement.parentElement.parentElement;
    infoContainer.classList.remove("edit-mode");

    let iconContainer = element.parentElement;
    iconContainer.children[0].classList.remove("hide-icon");
    iconContainer.children[1].classList.remove("reveal");
    iconContainer.children[2].classList.remove("reveal");

    if (element === saveActivity) {
      iconsActivity.forEach((icon) => {
        icon.classList.add("activity-disabled");
      });
      activityInputs.forEach((input) => {
        input.disabled = true;
      });
    } else if (element === saveInfoConnection) {
      newMdpContainer.classList.add("hide-new-mdp");
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = true;
      });
    } else if (element === saveGender) {
      genderSwitch.classList.add("hide-gender-switch");
      genderButtons.forEach((button) => {
        button.disabled = true;
      });
    } else {
      let inputs = infoContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = true;
      });
    }
  });
}
saveButtons.forEach((saveButton) => {
  saveEdit(saveButton);
});

// CHOIX DE L'ACTIVITE
document.querySelectorAll(".activity-input").forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      // Retirer 'selected' de tous les labels
      document.querySelectorAll(".activities-icon").forEach((label) => {
        label.classList.remove("selected");
      });
      // Ajouter 'selected' au label parent de l'input sélectionné
      input.parentElement.classList.add("selected");
    }
  });
});

// function editField(element){
//   let field = element.dataset.field;
//   let input = document.getElementById("input" + field)
//   input.disabled = false;
//   element.classList.add("d-none")
//   document.getElementById("check" + field).classList.remove("d-none")
//   document.getElementById("xmark" + field).classList.remove("d-none")
//   document.getElementById("xmark" + field).dataset.oldvalue = input.value
//   input.focus();
// }

// function cancelEdit(element){
//   let field = element.dataset.field;
//   let input = document.getElementById("input" + field)
//   input.disabled = true;
//   element.classList.add("d-none")
//   document.getElementById("check" + field).classList.add("d-none")
//   document.getElementById("edit" + field).classList.remove("d-none")
//   input.value = element.dataset.oldvalue
// }

// function categorieActivite(choice){
//   console.log(choice);
//   if (choice == 1) {
//     document.getElementById("iconBed").style.border = "1px solid";
//     document.getElementById("iconStanding").style.border = "none";
//     document.getElementById("iconWalking").style.border = "none";
//     document.getElementById("iconRunning").style.border = "none";
// }
//  else if (choice == 2) {
//   document.getElementById("iconBed").style.border = "none";
//   document.getElementById("iconStanding").style.border = "1px solid";
//   document.getElementById("iconWalking").style.border = "none";
//   document.getElementById("iconRunning").style.border = "none";
// }
// else if (choice == 3) {
//   document.getElementById("iconBed").style.border = "none";
//   document.getElementById("iconStanding").style.border = "none";
//   document.getElementById("iconWalking").style.border = "1px solid";
//   document.getElementById("iconRunning").style.border = "none";
// }
// else if (choice == 4) {
//   document.getElementById("iconBed").style.border = "none";
//   document.getElementById("iconStanding").style.border = "none";
//   document.getElementById("iconWalking").style.border = "none";
//   document.getElementById("iconRunning").style.border = "1px solid";
// }

// };

// function validateEmail(element) {
//   let field = element.dataset.field;
//   let input = document.getElementById("input" + field)
//   if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
//     console.log("email ok")
//   } else {
//     console.log("email invalide")
//   }
// }
