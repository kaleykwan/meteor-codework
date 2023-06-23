import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({
    "createUser"({ name, username, password, email }) {
        Accounts.createUser({
            password: password,
            username: username,
            email: email,
            profile: {
                name: name
            },
            createdAt: new Date(),
        });
      }
})