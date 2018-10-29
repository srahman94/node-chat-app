const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate corrate Message object', () => {
        var from = 'jon';
        var text = 'some text';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location', () => {
        var from = 'jon';
        var latitude = 11;
        var longitude = 10;
        var url = 'https://www.google.com/maps?q=11,10'
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    });
});