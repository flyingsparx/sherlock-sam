node = new CENode(MODELS.CORE);
node.set_agent_name("test user agent");

user = {
    name: 'test user',
    score: 0
};

document.body.onload = function(){
    chat = new SherlockChat();
}
