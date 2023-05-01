fetch('https://api.vk.com/method/users.get?user_ids=USER_ID&fields=first_name,last_name&access_token=YOUR_ACCESS_TOKEN&v=5.131')
/* Replace USER_ID with User ID to get friends (vk.com/id11111111): id 11111111 */
/* Replace YOUR_ACCESS_TOKEN with your access token */
  .then(response => response.json())
  .then(data => {
    const user = data.response[0];
    const firstName = user.first_name;
    const lastName = user.last_name;
    console.log(`Имя: ${firstName}`);
    console.log(`Фамилия: ${lastName}`);
  })
  .catch(error => console.error(error));
