function megaFriend(friends) {
    if (Array.isArray(friends) != true) {
        return "please give an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const input = ['Ali', 'lal', 'Alal', 'jamal', 'sopno', 'done'];
const output = megaFriend(input);
console.log(output);