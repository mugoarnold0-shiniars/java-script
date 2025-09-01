let years= 1692
while (years<=1721 ){
    if (years%400==0 ){
            console.log("ITS A LEAP YEAR",years)
    }
else if (years%100==0){
        console.log("ITS A LEAP YEAR",years)
    }
    else if (years%4==0){
        console.log("ITS A LEAP YEAR",years)
    }
else{
    console.log(years)
}
  years++;
}
