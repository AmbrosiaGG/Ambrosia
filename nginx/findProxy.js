const axios = require('axios');
const { getKey } = require("./getKey")

const findProxy = async (domain) => {
    let data
    await axios({
        url: process.env.nginxhost + "/api/nginx/proxy-hosts",
        method: 'GET',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': await getKey(),
            'Content-Type': 'application/json',
        }
    }).then(res => {
        data = res.data.find(element => element.domain_names[0] == domain.toLowerCase())
    }).catch(err => data = null)
    return data
}

module.exports = {
    findProxy
}