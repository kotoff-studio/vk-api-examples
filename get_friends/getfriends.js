fetch('https://api.vk.com/method/friends.get?user_id=USER_ID&access_token=YOUR_ACCESS_TOKEN&v=5.131')
/* Replace USER_ID with User ID to get friends (vk.com/id11111111): id 11111111 */
/* Replace YOUR_ACCESS_TOKEN with your access token */
  .then(response => response.json())
  .then(data => {
    const count = data.response.count;
    console.log(`Количество друзей: ${count}`);
  })
  .catch(error => console.error(error));
