const HandleEmailClick = () => {
  const email = "abdullaha4682@gmail.com";
  const subject = "Hello";
  const body = "How are you?";
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};
export default HandleEmailClick;
