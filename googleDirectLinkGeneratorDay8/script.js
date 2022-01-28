//Thought Process Behind App
// 1. To be able to input a document, audio or video link generated from Google Drive
// 2. To be able to insert that link correctly into the form on the link generator app
// 3. To be able to click a button to begin the process of generating a direct download link which can then be used to download the file contained in the link on any browser
// 4. To be able to show direct download file link in textarea
// 5. TO be able to copy direct download file link from textarea

//Common amongst document, audio and video Google Drive Links = unique file ID.

//CREATE VARIABLES
//input
const gLink = document.getElementById("glink");
//direct download button
const btn = document.getElementById("btn");
//textarea
const downloadLink = document.getElementById("download-link");