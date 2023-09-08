const express = require('express');
const app = express()

app.get("/endpoint", (req,res) => {
    const {slack_name, track} = req.query;
    console.log(slack_name)
    const current_day = new Date().toLocaleString('en-US', { weekday: 'long' });
    const current_time_utc = new Date().toISOString();
    
    const github_file_url = ""
    const github_repo_url = ""

    const response = {
        slack_name : slack_name,
        current_day: current_day,
        utc_time: current_time_utc,
        track: track,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: 200
    }

    res.status(200).send(response)
  }
)

const port =  3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});