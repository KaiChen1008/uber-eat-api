const axios = require('axios');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

axios.defaults.withCredentials = true;
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

// https://eats.uber.com/group-orders/c9278b82-d972-43c8-9cc8-2b1d54b21c74/join
const ID = 'c9278b82-d972-43c8-9cc8-2b1d54b21c74';

async function get_cookie(orderID) {
    var baseURL = `https://eats.uber.com/group-orders/${orderID}/join`;
    try {
        return axios.get(baseURL, {jar: cookieJar});
    } catch(err) {
        return err;
    }
    
}

async function add_member(orderID) {
    var baseURL = 'https://www.ubereats.com/api/addMemberToDraftOrderV1';

    var data = {
        draftOrderUuid: orderID,
        nickname: 'watch', // TODO generate random nickanme
        creatorEaterUUID: 'c8763685-39c0-4fec-aad7-1674ba12c258'  // TODO: use random function to generate this id
    };

    var headers = {
        'authority' : 'www.ubereats.com',
        'x-csrf-token': 'x',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        'accept': '*/*',
        'origin': 'https://www.ubereats.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': `https://www.ubereats.com/group-orders/${orderID}/join`,
        'accept-language': 'zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-CN;q=0.5',
    };

    try {
        return axios.post(baseURL,data,
            {headers: headers,jar: cookieJar,});
    } catch (err) {
        return err;
    }
    
}


async function get_group_order(orderID, full_info) {
    var baseURL = 'https://www.ubereats.com/api/getGroupCartV1';
    var data    = {
        "draftOrderUuid":orderID,
        "currencyCode":""
    }

    var headers = {
        'authority': 'www.ubereats.com',
        'x-csrf-token': 'x',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        'accept': '*/*',
        'origin': 'https://www.ubereats.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'en-US,en;q=0.9',
    }

    try {
        var req = await axios.post(baseURL, data, {headers: headers, jar: cookieJar,});

        if (full_info === true)
            return req.data.data.groupedItems.map(x => {return {'items':x.items, 'name':x.name}});
        else
            return req.data.data.groupedItems.map(x => {return {'items':x.items.map(i => {return {'title':i.title,'price':i.price}}), 'name':x.name}});
    } catch (err){
        return err;
    };
    
}


function print(items) {
    for (var i = 0; i < items.length; i++) {
        console.log( JSON.stringify(items[i]));
    }
}

module.exports = {
    add_member: add_member,
    get_group_order: get_group_order,
};

// (async () => {
//     var req;
//     req = await add_member(ID);
//     req = await get_group_order(ID, false);
//     print(req);

//     // setInterval(async ()=>{ await get_group_order(ID)}, 1500);
// })();