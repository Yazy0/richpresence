const prompt = require('prompt-sync')({sigint: true});
const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: "ipc"
});


rpc.on('ready', () =>{
    rpc.setActivity({
        details: prompt('Details: '),
        state: prompt('State: '),
        largeImageKey: prompt('Image Name: '),
        largeImageText: prompt('Image Text: '),
        smallImageKey: prompt('Small Image Name: '),
        smallImageText: prompt('Small Image Text: '),
        buttons: [{label: prompt('Button Text: '), url:prompt('Url: ')}, {label: prompt('2ND Button Text: '),url:prompt("2ND Button url: ")}]
    })

    console.log('Rpc ON')

})

rpc.login({
    clientId: prompt('Insert Client ID: ')
})
