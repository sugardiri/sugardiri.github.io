const form=document.getElementById("cartform")
form.addEventListener('submit',function(event){
  event.preventDefault()

    const balloons = document.getElementById('balloons').value

  console.log(balloons)

    const chocolates = document.getElementById('chocolates').value

  console.log(chocolates)

  const snacks = document.getElementById('snacks').value

  console.log (snacks)

  const stuffedtoy = document.getElementById('stuffedtoy').value

  console.log (stuffedtoy)

  const coffee = document.getElementById('coffee').value

  console.log (coffee)

  const date = document.getElementById('date').value

  console.log (date)


 document.getElementById("user").innerHTML = "You have added " + balloons + " Balloons, " + chocolates + " Chocolates, " + snacks + " snacks, " + stuffedtoy + " Stuffed Toy and " + coffee + " Coffee to be delivered for " + date + "."  ;

})
