    
module.exports = function makeExchange(currency) {

    const manye = {};
          
    if (currency >= 10000) {
        manye.error = "You are rich, my friend! We don't have so much coins for exchange";
      return manye;
    }
  
    if (currency >= 50) {
        manye.H = 0;
  
      while (currency >= 50) {
        manye.H++;
        currency -= 50;
      } 
    }
  
    if (currency >= 25) {
        manye.Q = 0;
  
      while (currency >= 25) {
        manye.Q++;
        currency -= 25;
      }   
    }
  
    if (currency >= 10) {
        manye.D = 0;
  
      while (currency >= 10) {
        manye.D++;
        currency -= 10;
      }
    }
  
    if (currency >= 5) {
        manye.N = 0;
  
      while (currency >= 5) {
        manye.N++;
        currency -= 5;
      }
    }
      
    if (currency >= 1) {
        manye.P = 0;
  
      while (currency >= 1) {
        manye.P++;
        currency -= 1;
      }
    }
    
  return manye;       
  }