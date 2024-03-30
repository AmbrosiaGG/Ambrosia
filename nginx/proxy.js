const axios = require('axios');
const { getKey } = require("./getKey")

const proxyDomain = async (domain, ip, port) => {
    try {
        let { data } = await axios({
            url: `${process.env.nginxhost}/api/nginx/proxy-hosts`,
            method: 'POST',
            headers: {
                'Authorization': await getKey(),
                'Content-Type': 'application/json',
            },
            data: {
                "domain_names": [
                    domain
                ],
                "forward_scheme": "http",
                "forward_host": ip,
                "forward_port": port,
                "access_list_id": "0",
                "certificate_id": "8",
                "meta": {
                    "letsencrypt_email": "certificate.authority@ambrosia.gg",
                    "letsencrypt_agree": true,
                    "dns_challenge": false
                },
                "advanced_config": "",
                "locations": [],
                "block_exploits": true,
                "caching_enabled": false,
                "allow_websocket_upgrade": true,
                "http2_support": true,
                "hsts_enabled": true,
                "hsts_subdomains": false,
                "ssl_forced": false
            }
        });

        return { error: false, message: "Successfully proxied domain.", data: data };
    } catch (err) {
        console.log("proxyDomain: " + err.message)
        return { error: true, message: err.message, data: null };
    }
}

module.exports = {
    proxyDomain
}