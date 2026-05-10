/*
Task 10: Utility Type (Omit) MEDIUM
Concepts: Built-in Utility Types (Omit)
Scenario: You need to strip sensitive data (like a password) from a user object
before sending it to the UI.

interface UserAccount {
id: number;
username: string;
password: string;
}

Instructions:
Create a type PublicUser using the Omit utility.
Exclude the password field from UserAccount.
Hint: Omit<UserAccount, "password">.
*/

interface UserAccount {
id: number;
username: string;
password: string;
};

type PublicUser = Omit<UserAccount, "password">;

/*
type PublicUser = {
    id: number;
    username: string;
}
*/