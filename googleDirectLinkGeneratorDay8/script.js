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
const directDownloadLink = document.getElementById("download-link");

const copyLink = document.querySelector(".copy");

//add an event listener that will fire the function for generating the link when the button is clicked
btn.addEventListener("click", generateLink);

function generateLink(e) {
    //make sure the form does not always refresh each time the button is clicked
    e.preventDefault();
    //create variable to hold the value of the link
    const gLinkValue = gLink.value;
    //check if the value entered is actually a google drive link file eg https://drive.google.com/file/d/1nGcgx9Z7fywDISMaaha5eES9DdAquspc/view?usp=sharing
    const confirmGoogleLink = gLink.value.includes("https://drive.google.com/file/d/");
    // console.log(gLinkValue);
    //confirm if the link pasted in browser is really a google link and if it is, replace the part of the link before the file ID with download string and the part of the link after the id with an empty string...understand this by looking at a sample google drive link
    https://drive.google.com/u/0/uc?id=1nGcgx9Z7fywDISMaaha5eES9DdAquspc&export=download
    if (confirmGoogleLink == true) {
        const getDirectDownloadLink = gLinkValue.replace("https://drive.google.com/file/d/", "https://drive.google.com/u/0/uc?id=")
        .replace("/view?usp=sharing", "&export=download");

        directDownloadLink.value = getDirectDownloadLink;
        
    }

    //click and convert our file link from a sharing link to a download link and display in textarea  is a success
    //Next, make copy button functional.
    function copyText(target) {
        //give alert for when nothing is selected and copy button is clicked
        if (target.value == " ") {
            alert("Oops...You have not generated a download link yet.")
        } else {
            //select link, copy to board and give alert for when the link has been copied
            target.select();
            navigator.clipboard.writeText(copyLink);
            alert("Your download link has been copied to the clipboard");

        }
    }

    copyLink.addEventListener("click", () => {
        return copyText(directDownloadLink);
    })
}
