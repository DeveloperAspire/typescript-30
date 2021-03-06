const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '.inbox input[type="checkbox"]'
);

let lastChecked;

function handleCheck(e) {
  // Check if they pressed shiftkey
  // And Check that they are checking it
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // Write the code needed;
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
