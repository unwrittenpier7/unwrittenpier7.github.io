async function search() {
  const email = document.getElementById("email").value.toLowerCase();
  const result = document.getElementById("result");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const user = users.find(u => u.email.toLowerCase() === email);

    if (user) {
      const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res1.json();
      const userPosts = posts.filter(post => post.userId === user.id);
      result.textContent = `Name: ${user.name} — Posts: ${userPosts.length}`;
    } else {
      result.textContent = "User not found.";
    }
  } catch (err) {
    result.textContent = "Error fetching data.";
    console.error(err);
  }
}