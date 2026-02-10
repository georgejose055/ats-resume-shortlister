document.getElementById('runBtn').addEventListener('click', async () => {
    const jd = document.getElementById('jd').value;
    if (!jd) {
        alert('Please enter a JD.');
        return;
    }
    
    // Replace with your N8N webhook URL (from Step 3)
    const webhookUrl = 'https://your-n8n-instance.com/webhook/your-webhook-id';  // Update this!
    
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jd: jd })
        });
        const result = await response.text();
        document.getElementById('result').innerText = 'Screening started! Check your emails.';
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
});