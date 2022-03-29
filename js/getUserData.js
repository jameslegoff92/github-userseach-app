export async function getUserData(username) {
  const url = 'https://api.github.com/users/' + username;
  let response = await fetch(url);

  if (response.status === 200) {
      let data = await response.text();
      const userData = JSON.parse(data);
      
      //Used to get the value of the dates.
      const creationDate = userData.created_at;
      const formatDate = new Date(creationDate);
      const day = formatDate.getDate();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[formatDate.getMonth()];
      const year = formatDate.getFullYear();
  
      const user = {
        profilePhoto: userData.avatar_url,
        name: userData.name,
        username: "@" + userData.login,
        created_at: {
          day: day,
          month: month,
          year: year,
        },
        bio: userData.bio,
        repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        location: userData.location,
        blog: userData.blog,
        twitter: userData.twitter_username,
        company: userData.company,
      }
    return user;
  }

  if (response.status === 404) {
      return '404';
  }
}