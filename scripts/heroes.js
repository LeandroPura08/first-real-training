const supports = [
  "/images/supports/Chen.jpg",
  "/images/supports/crystal-maiden.jpg",
  "/images/supports/earth-spirit.jpg",
  "/images/supports/earthshaker.jpg",
  "/images/supports/witch-doctor.jpg",
  "/images/supports/lion.jpg"
];


const offlanes = [
  "/images/offlane/balanar.jpg",
  "/images/offlane/centour.jpg",
  "/images/offlane/DK.jpg",
  "/images/offlane/legion.jpg",
  "/images/offlane/tidehunter.jpg",
  "/images/offlane/timbersaw.jpg"
];

const safelanes = [
  "/images/safelane/drow.jpg",
  "/images/safelane/huskar.jpg",
  "/images/safelane/Medusa.jpg",
  "/images/safelane/Snipe.jpg",
  "/images/safelane/sven.jpg",
  "/images/safelane/terrorblade.jpg"
];

let  output ='';
offlanes.forEach((hero) =>{
  output = output +
  `
  <div class="image">
    <img class="pic" src=${hero}>
  </div>
  `
  document.querySelector('.image-container').innerHTML = output
});

document.querySelectorAll('.options').forEach((options)=>{
  options.addEventListener('click',()=>{
  document.querySelector('.selected').classList.remove("selected");
  const role = options.dataset.role;

  if(role =="offlanes"){
    output = '';
    document.getElementById('offlanes').classList.add("selected");
    offlanes.forEach((hero) =>{
      output = output +
      `
      <div class="image">
        <img class="pic" src=${hero}>
      </div>
      `
      document.querySelector('.image-container').innerHTML = output
    });

  }else if(role =="safelanes"){
    output = '';
    document.getElementById('safelanes').classList.add("selected");
    safelanes.forEach((hero) =>{
      output = output +
      `
      <div class="image">
        <img class="pic" src=${hero}>
      </div>
      `
      document.querySelector('.image-container').innerHTML = output
    });
  }else if(role =="supports"){
    output = '';
    document.getElementById('supports').classList.add("selected");
    supports.forEach((hero) =>{
      output = output +
      `
      <div class="image">
        <img class="pic" src=${hero}>
      </div>
      `
      document.querySelector('.image-container').innerHTML = output
    });
  }
  })
})