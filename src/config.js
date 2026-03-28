module.exports = {
    "name": "bucksh0tAFK", // Bot Name
    "log": true,
    "server": {
        "ip": "IP",
        "port": 25565,
        "version": "1.16.5"
    },
    "instructions": [
        {
            "type": 1,
            "name": "Login",
            "value": "/login PASS",
            "wait": 1500
        },
        {
            "type": 1,
            "name": "SelectServer",
            "value": "/skyblock",
            "wait": 8000
        },
        {
            "type": 2,
            "name": "StartInterval",
            "value": [
                "/msg bucksh0t .",
                "/msg bucksh0t ,",
            ],
            "wait": 10000
        },
    ]
};