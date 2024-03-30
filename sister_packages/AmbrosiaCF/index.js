
const axios = require('axios');

const url = "https://api.cloudflare.com/client/v4";

class AmbrosiaCF {
  constructor(options) {
    this.apikey = options.apikey; // Assuming your package needs a name property
  }

  async dnsRecordAdd(zone, ip, domain, proxied, type, ttl) {
    try {
      // Make the API call with axios.post
      const response = await axios.post(url + `/zones/${zone}/dns_records`, {
        headers: {
          "X-Auth-Key": this.apikey,
          "Content-Type": "application/json"
        },
        data: {
          content: ip,
          name: domain,
          proxied: proxied,
          type: type,
          ttl: ttl
        }
      });

      // Handle successful response (if needed)
      return response.data;
      // You might want to return the response.data here if necessary

    } catch (error) {
      console.error('Error adding DNS record:', error);
    }
  }
}

module.exports = AmbrosiaCF;
