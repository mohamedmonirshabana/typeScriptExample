let message;
message = 'abc';
let endwith = <string>message.endsWith('c');
let alt1 = (<string>message).endsWith('c');
let alt2 = (message as string).endsWith('c');
// Other Shape