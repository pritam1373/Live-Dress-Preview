a1=document.getElementById("box1")
a2=document.getElementById("box2")
a3=document.getElementById("box3")
a4=document.getElementById("box4")
a5=document.getElementById("box5")
a6=document.getElementById("box6")
a7=document.getElementById("box7")
a8=document.getElementById("box8")
a9=document.getElementById("box9")
a10=document.getElementById("box10")
a11=document.getElementById("box11")
a12=document.getElementById("box12")
a13=document.getElementById("box13")
a14=document.getElementById("box14")
a15=document.getElementById("box15")
a16=document.getElementById("box16")
a17=document.getElementById("box17")
a18=document.getElementById("box18")
a19=document.getElementById("box19")
a20=document.getElementById("box20")
a21=document.getElementById("box21")
a22=document.getElementById("box22")
a23=document.getElementById("box23")
a24=document.getElementById("box24")
a25=document.getElementById("box25")
a26=document.getElementById("box26")

b1=document.getElementById("ib1")
//a1.style.backgroundColor="yellow"

h=document.getElementById("head")

setInterval(() =>{
  g1=Math.floor(Math.random()*255)
  g2=Math.floor(Math.random()*255)
  g3=Math.floor(Math.random()*255)
r1=Math.floor(Math.random()*150)
r2=Math.floor(Math.random()*150)
r3=Math.floor(Math.random()*155)
  h.style.color=`rgb(${r1},${r2},${r3+100})`
  h.style.borderColor=`rgb(${g1},${g2},${g3+100})`
},1000)

 f = document.getElementById("fi");
     p = document.getElementById("photo");
   

    f.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          p.src = e.target.result;
          p.style.display = "block";
          p.style.clipPath = "none";
          p.style.opacity=1
           // Reset shape if re-uploaded
        }
        reader.readAsDataURL(file);
      }
    });
   

//     pn=document.getElementById("pritam")
// setInterval(() =>{
//   p1=Math.floor(Math.random()*255)
//   p2=Math.floor(Math.random()*255)
//   p3=Math.floor(Math.random()*255)
//   pn.style.borderColor=`rgb(${p1},${p2},${p3})`
// },1000)


