class UberPriceCalc {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, duration) {
      const distanceCost = distance * this.costPerMile;
      const durationCost = duration * this.costPerMinute;
      const totalFare = this.baseFare + distanceCost + durationCost;
  
      return totalFare;
    }
  
    
  }
  
  // Example usage:
  var personA = new UberPriceCalc(100, 15, 5);
  
  var distanceInMiles = 10;
  var durationInMinutes = 20;
  
  var totalPrice = personA.calculatePrice(distanceInMiles, durationInMinutes);
  
  console.log(`The estimated Uber price is Rs:${totalPrice.toFixed(2)}`);
  