fetch('https://api.vk.com/method/users.get?user_ids=USER_ID&fields=city,bdate,screen_name&access_token=YOUR_ACCESS_TOKEN&v=5.131')
  /* Replace USER_ID with User ID to get friends (vk.com/id11111111): id 11111111 */
  /* Replace YOUR_ACCESS_TOKEN with your access token */
  .then((response: Response) => response.json())
  .then((data: any) => {
    const user = data.response[0];
    const firstname: string = user.first_name;
    const surname: string = user.last_name;
    const city: string = user.city ? user.city.title : 'Не указан';
    const bdate: string = user.bdate ? user.bdate : 'Не указана';
    const screenName: string = user.screen_name;
    const userid: number = user.id;
    console.log('Информация о пользователе:\n');
    console.log(`Имя: ${firstname}`);
    console.log(`Фамилия: ${surname}`);
    console.log(`Город: ${city}`);
    console.log(`Дата рождения: ${bdate}`);
    console.log(`Числовой ID страницы: ${userid} (https://vk.com/${screenName})`);
  })
  .catch((error: any) => console.error(error));
