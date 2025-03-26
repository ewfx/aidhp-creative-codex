const mockData = {
    getUserProfile: function(phone) {
      const config = JSON.parse(localStorage.getItem('mockConfig'));
      const userProfiles = config.userProfiles || {};
      
      if(phone.match(/82864/gi)) return userProfiles['82864'];
      if(phone.match(/78753/gi)) return userProfiles['78753'];
      
      return {
        name: "Default User",
        accountType: "Standard Account"
      };
    },
    
    getOffers: function() {
      const config = JSON.parse(localStorage.getItem('mockConfig'));
      return config.offers || [];
    },
    
    getNearbyMerchants: function() {
      return [
        { name: "Dominos", distance: "0.5 miles", offer: "50% off" },
        { name: "Shell Station", distance: "1.2 miles", offer: "15% cashback" }
      ];
    }
  };
  
  // Initialize mock config
  fetch('static/conf/IDConnection.json')
    .then(response => response.json())
    .then(config => {
      localStorage.setItem('mockConfig', JSON.stringify(config));
    });