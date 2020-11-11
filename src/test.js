const { Amplify, Auth } = require("aws-amplify");

async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username: "test@gmail.com",
      password: "P@ssw0rd",
      attributes: {
        email: "test@gmail.com", // optional
        //phone_number: 1234314,   // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log("##########");
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}
