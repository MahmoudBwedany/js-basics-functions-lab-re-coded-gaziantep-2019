// Code your solution in this file!

function distanceFromHqInBlocks(location){
  const hqLocation = 42;

  return Math.abs ( hqLocation - location) ;

}

function distanceFromHqInFeet (locationX) {
  let distanceInBlocks = distanceFromHqInBlocks(locationX);
  return distanceInBlocks * 264;


}

function distanceTravelledInFeet(beginning, destination) {

 return Math.abs(destination - beginning) * 264;
}

function calculatesFarePrice (start, finish) {
  let distanceInFeet = distanceTravelledInFeet(start, finish);
  if (distanceInFeet <= 400) {
    return 0;
  }

  else if (distanceInFeet > 400 && distanceInFeet<2000) {
     return (distanceInFeet - 400) * 0.02;
  }

  else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    return 25;
  }

  else if (distanceInFeet>2500)
  {
    return "cannot travel that far";
  }


}


//console.log(distanceTravelledInFeet(43, 48));
