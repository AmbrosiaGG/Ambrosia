const axios = require('axios');

const getKey = async () => {

    const res = await axios({
        url: `${process.env.nginxhost}/api/tokens`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            "identity": process.env.certificate_authority_ident,
            "secret": process.env.certificate_authority_secret
        }
    });

    return `Bearer ${res.data.token}`;
};

module.exports = {
    getKey
};