const inputs = document.querySelectorAll('.controls input') as NodeList;


function handleUpdate() {
     const suffix: string | null = this.dataset.sizing || '' ;

     console.log(suffix);

     document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);

}

inputs.forEach(input => {
      input.addEventListener('change', handleUpdate);
       input.addEventListener("mousemove", handleUpdate);
})