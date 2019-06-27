const email = require('./email');

test('check email is valid', () => {
    expect(email('email@gmail.com')).toBeTruthy();
    expect(email('emailgmail.com')).toBeTruthy(); 
    expect(email('email @gmail.com')).toBeTruthy();
    expect(email('email@gmail.com')).toBeTruthy();
    expect(email('email@gmailcom')).toBeTruthy();
    expect(email('email@gxdfxdf64mail.com')).toBeTruthy();
    expect(email('email@gmail@com')).toBeTruthy();
    expect(email('email@gmail.com')).toBeTruthy();
});