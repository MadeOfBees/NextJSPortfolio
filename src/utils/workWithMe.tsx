export const clickContact = async () => {
    const email = "imMadeOfBees@gmail.com";
    const subject = "Hey Bee, let's work together!";
    window.open(`mailto:${email}?subject=${subject}`);
}