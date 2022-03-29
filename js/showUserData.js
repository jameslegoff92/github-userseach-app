export function showUserData(user) {
  if (user === "404") {
    document.getElementById("userPhoto").src = "./assets/Octocat.png";
    document.getElementById("name").innerText = "N/A";
    document.getElementById("username").innerText = "N/A";
    document.getElementById("createdAt").innerText = "N/A";
    document.getElementById("bio").innerText = "No bio";
    document.getElementById("repos").innerText = "N/A";
    document.getElementById("followers").innerText = "N/A";
    document.getElementById("following").innerText = "N/A";
    document.getElementById("blog__text").innerText = "N/A";
    document.getElementById("location__text").innerText = "N/A";
    document.getElementById("twitter__text").innerText = "N/A";
    document.getElementById("company__text").innerText = "N/A";

    const errMsg = document.getElementById('err1')
    errMsg.classList.remove('searchbar__errMsg--off');
    errMsg.classList.add('searchbar__errMsg--on');
    
  } else {

    const errMsg = document.getElementById('err1');
    errMsg.classList.add('searchbar__errMsg--off');
    errMsg.classList.remove('searchbar__errMsg--on');

    document.getElementById("userPhoto").src = user.profilePhoto;
    document.getElementById("name").innerText = user.name;
    document.getElementById("username").innerText = user.username;
    document.getElementById("createdAt").innerText =
      "Joined " +
      user.created_at.day +
      " " +
      user.created_at.month +
      " " +
      user.created_at.year;
    document.getElementById("bio").innerText = user.bio ? user.bio : 'No bio';
    document.getElementById("repos").innerText = user.repos;
    document.getElementById("followers").innerText = user.followers;
    document.getElementById("following").innerText = user.following;


    if (!user.blog) {
      const blogText = document.getElementById("blog__text");
      const blogSVG = document.getElementById("blog__svg");

      reduceSvgOpacity(blogText, blogSVG);

    } else {
      document.getElementById("blog__text").innerText = user.blog;
      document.getElementById("blog__text").setAttribute("href", user.blog);
    }

    if (!user.location) {
      const locationText = document.getElementById("location__text");
      const locationSVG = document.getElementById("location__svg");

      reduceSvgOpacity(locationText, locationSVG);

    } else {
      console.log(user.location)
      document.getElementById("location__text").innerText = user.location;
    }

    if (!user.twitter) {
      const twitterText = document.getElementById("twitter__text");
      const twitterSVG = document.getElementById("twitter__svg");

      reduceSvgOpacity(twitterText, twitterSVG);

    } else {
      document.getElementById("twitter__text").innerText = user.twitter;
      console.log(user.twitter)
      document.getElementById("twitter__text").setAttribute("href", "https://www.twitter.com/" + user.twitter);
    }

    if (!user.company) {
      const companyText = document.getElementById("company__text");
      const companySVG = document.getElementById("company__svg");

      reduceSvgOpacity(companyText, companySVG);

    } else {
      document.getElementById("company__text").innerText = user.company;
      document.getElementById("company__text").setAttribute("href", user.company);
    }
  }
}

function reduceSvgOpacity(textNode, svgNode) {
  textNode.classList.add('user-link__text-disabled')
  textNode.innerText = "Not availabe";
  textNode.style.color = "rgba(75, 106, 155, 0.7";
  svgNode.style.fillOpacity="0.5";
}
