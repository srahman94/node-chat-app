const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(()=> {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'sujon',
            room: 'siu'
        }, {
            id: '2',
            name: 'kr',
            room: 'sust'
        }, {
            id: '3',
            name: 'sr',
            room: 'siu'
        }]
    });

    it('add new user', () => {
        var users = new Users();
        var user = {
            id: '1',
            name: 'sujon',
            room: 'siu'
        };

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user', ()=> {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', ()=> {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', ()=> {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', ()=> {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('for siu', () => {
        var usersList = users.getUserList('siu');

        expect(usersList).toEqual(['sujon', 'sr']);
    });

    it('for sust', () => {
        var usersList = users.getUserList('sust');

        expect(usersList).toEqual(['kr']);
    });
});