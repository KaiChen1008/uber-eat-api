fetch("https://www.ubereats.com/_events", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-CN;q=0.5",
    "content-type": "application/json",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "x",
    "x-uber-xps": "%7B%22eats_web_photo_forward_grid_view%22%3A%7B%22name%22%3A%22enabled%22%7D%2C%22eats_web_quick_add_to_cart%22%3A%7B%22name%22%3A%22control%22%7D%2C%22eats_web_r2e_invoice%22%3A%7B%22name%22%3A%22treatment%22%7D%2C%22eats_web_coi_checkout_v2%22%3A%7B%22name%22%3A%22treatment%22%7D%2C%22eats_web_storefront_store_info%22%3A%7B%22name%22%3A%22treatment%22%7D%2C%22eats_web_closed_store_multicart_decoupling_selector%22%3A%7B%22name%22%3A%22multicart_decoupling%22%7D%2C%22eats_web_migrate_delivery_details_to_location_manager%22%3A%7B%22name%22%3A%22treatment%22%7D%7D",
    "cookie": "dId=40d8d374-861f-44d6-b492-d62f52803dec; marketing_vistor_id=e5bc9034-bda6-41c0-8bbc-473de34a15e6; uev2.gg=true; CONSENTMGR=c1:1%7Cc2:1%7Cc3:1%7Cc4:1%7Cc5:1%7Cc6:1%7Cc7:1%7Cc8:1%7Cc9:1%7Cc10:1%7Cc11:1%7Cc12:1%7Cc13:1%7Cc14:1%7Cc15:1%7Cts:1629560172916%7Cconsent:true; _gcl_au=1.1.1246105355.1629560173; _ga=GA1.2.53970407.1629560173; _ts_yjad=1629560173648; _rdt_uuid=1629560173704.89386f3f-410b-44ea-aa3b-35301145b861; _scid=5d588aff-3eab-4875-a053-c1161030b51b; sid=QA.CAESENPauG5q00Achn-7KzdAWPUYqNWiigYiATEqJDJhYjhhNjg1LTM5YzAtNGZlYy1hYWQ3LTE2NzRiYTEyYzI1ODI8hfau3iP_WQDaa8ljcoU9XtHwpcbSneDwzSFzU-usXRZhIERKdWUZKy80NcBalAjnHXUH0EO6oy4E_riNOgExQg0udWJlcmVhdHMuY29t.A_Zkl21eW0kFOElHSpAPCQ1VwhZJKFpGX8yc1peyNfg; _sctr=1|1630425600000; uev2.loc=%7B%22latitude%22%3A25.0289602%2C%22longitude%22%3A121.5404658%2C%22address%22%3A%7B%22address1%22%3A%22%E7%91%9E%E5%AE%89%E8%A1%97208%E5%B7%B728%E8%99%9F%22%2C%22address2%22%3A%22%22%2C%22aptOrSuite%22%3A%22%22%2C%22eaterFormattedAddress%22%3A%22%22%2C%22title%22%3A%22%E7%91%9E%E5%AE%89%E8%A1%97208%E5%B7%B728%E8%99%9F%22%2C%22subtitle%22%3A%22%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%22%2C%22uuid%22%3A%22%22%7D%2C%22reference%22%3A%22ChIJh0sAryuqQjQRvE8LE39ylBM%22%2C%22referenceType%22%3A%22google_places%22%2C%22type%22%3A%22google_places%22%2C%22addressComponents%22%3A%7B%22countryCode%22%3A%22%22%2C%22firstLevelSubdivisionCode%22%3A%22%22%2C%22city%22%3A%22%22%2C%22postalCode%22%3A%22%22%7D%7D; uev2.id.xp=89a6cee8-a1e1-48f4-a690-5a3ca0706410; uev2.id.session=3a67c762-bedb-404e-aeab-397e6c4dda54; uev2.ts.session=1631335598978; jwt-session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzEzMzU1OTksImV4cCI6MTYzMTQyMTk5OX0.NSDAkc1oml9PL1IxkzUm9jF5cHt6_j6xs4BLv-sWE24; utm_medium=undefined; utag_main=v_id:017b695af14b0036c9c73f70a57003089001b08100942$_sn:10$_se:2$_ss:0$_st:1631337401374$ses_id:1631335600484%3Bexp-session$_pn:1%3Bexp-session; _userUuid=; _gid=GA1.2.1503234519.1631335602; _uetsid=42b6c92012bb11eca94f5b49ce612581; _uetvid=848957e0029511ec96d9b752fd294302"
  },
  "referrer": "https://www.ubereats.com/tw/orders/4344faf8-ee72-4079-8008-696eb2c5258a",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"items\":[{\"type\":\"rpc:method-client\",\"payload\":{\"method\":\"getActiveOrdersV1\",\"status\":\"success\",\"timing\":1052,\"meta\":{\"device\":{\"standalone\":false},\"location\":{\"hostname\":\"www.ubereats.com\",\"pathname\":\"/tw/orders/4344faf8-ee72-4079-8008-696eb2c5258a\",\"href\":\"https://www.ubereats.com/tw/orders/4344faf8-ee72-4079-8008-696eb2c5258a\",\"referrer\":\"\",\"searchParams\":{}},\"time\":{\"event_start\":1631336831350}}}}]}",
  "method": "POST",
  "mode": "cors"
});


// respose: ok