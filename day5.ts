// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series
//  of statements about these items, such as “I would like to own a Honda motorcycle.”


let transports: string []= ["sportage", "aqua", "cultus"];
transports.forEach(transport =>    {
console.log(`i would like to own a ${transport},`);
});


// Question 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.


let guest: string[]= ["asif","amir","shahid"];
guest.forEach(guest =>    {
console.log(`Mr. ${guest}, i invite to you my child 1st birthday on this sunday 7 pm`);
});


// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.


let guests: string[]= ["asif","amir","shahid"];
guests.forEach(guest =>    {
console.log(`Mr. ${guest},i invite to you my child 1st birthday on this sunday 7 pm`);
});

let unableToAttend = "shahid";
console.log(`${unableToAttend} can't come to birthday.`);

// Replace the guest
let newGuest = "nadeem";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`mr. ${guest}, i invite to you my child 1st birthday on this sunday 7 pm`);
});