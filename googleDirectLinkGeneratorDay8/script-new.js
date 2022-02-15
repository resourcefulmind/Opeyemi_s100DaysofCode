/* 
    - get link from input field and check if it is a valid google drive link
    - if not valid google drive link, alert user with error message and return false
    - if valid google drive link replace https://drive.google.com/file/d/ with https://drive.google.com/u/0/uc?id=  and replace /export=download with /view?usp=sharing and display in textarea
    - if valid google drive link, copy link to clipboard and alert user with success message
*/

const appInitialState = {
    driveLink: '',
    driveLinkValid: null,
    textareaGeneratedLink: ''
}
let appState = appInitialState;

const CONSTANTS = {
    LINK_TYPE: {
        DEFAULT: 'defaultLink',
        AUDIO: 'audioLink',
        VIDEO: 'videoLink'
    },
    STATUS_MESSAGE: {
        INVALID_LINK: 'Oops, this is not a Google Drive File link...Kindly enter a Google Drive File link',
        NOT_GENERATED_LINK: 'Oops, you have not generated a download link yet',
        GENERATED_LINK: 'Your download link has been copied to the clipboard'
    },
    ACCEPTED_LINK: 'https://drive.google.com/file/d/' || 'https://docs.google.com/file/d/',
    MORPHED_DRIVE_LINK: 'https://drive.google.com/u/0/uc?id=',
}
const inputLink = document.getElementById('glink');
const btnGenerateLink = document.getElementById('btn');
const btnCopyGeneratedLink = document.getElementById('copy');
const btnCopyAudio = document.getElementById('copy-audio');
const btnCopyVideo = document.getElementById('copy-video');
const textareaGeneratedLink = document.getElementById('download-link');
const textAreaAudio = document.getElementById('embed-audio');
const textAreaVideo = document.getElementById('embed-video');

const setValidDriveLink = (state) => {
    return { ...state, driveLinkValid: true }
}
const setInvalidDriveLink = (state) => {
    return { ...state, driveLinkValid: false }
}
const setDriveLinkString = (state, link) => {
    return { ...state, driveLink: link }
}
const setGeneratedLink = (state, link) => {
    return { ...state, textareaGeneratedLink: link }
}
const checkIfValidDriveLinkString = (link) => {
    return link.includes(CONSTANTS.ACCEPTED_LINK)
}
const morphDriveLinkString = (link) => {
    return link.replace(CONSTANTS.ACCEPTED_LINK, CONSTANTS.MORPHED_DRIVE_LINK)
}
const morphAudioLink = (link) => {
    return `<audio width="300" height="32" controls="controls" src="${link}"></audio>`
}
const morphVideoLink = (link) => {
    return `<iframe src="${link.replace("/view?usp=sharing", "")}"/preview" width="560" height="315"></iframe>`
}
const copyTextToClipboard = (target, type) => {
    if (target.value) {
        let targetValue;
        target.select();
        alert(CONSTANTS.STATUS_MESSAGE.GENERATED_LINK);
        switch (type) {
            case CONSTANTS.LINK_TYPE.DEFAULT:
                navigator.clipboard.writeText(target.value);
                return
            case CONSTANTS.LINK_TYPE.AUDIO:
                targetValue = morphAudioLink(target.value);
                navigator.clipboard.writeText(targetValue);
                return 
            case CONSTANTS.LINK_TYPE.VIDEO:
                targetValue = morphVideoLink(target.value);
                navigator.clipboard.writeText(targetValue);
                return 
            default:
                return false;
        }
    }
    alert(CONSTANTS.STATUS_MESSAGE.NOT_GENERATED_LINK)
    return;
}

inputLink.addEventListener('change', (e) => {
    if (!checkIfValidDriveLinkString(e.target.value)) {
        alert(CONSTANTS.STATUS_MESSAGE.INVALID_LINK);
        appState = setInvalidDriveLink(appState);
        return;
    }
    appState = setValidDriveLink(appState);
    appState = setDriveLinkString(appState, e.target.value);
})

btnGenerateLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!appState.driveLinkValid) {
        alert(CONSTANTS.STATUS_MESSAGE.INVALID_LINK);
        return;
    }
    textareaGeneratedLink.value = morphDriveLinkString(appState.driveLink);
    textAreaAudio.value = morphAudioLink(appState.driveLink);
    textAreaVideo.value = morphVideoLink(appState.driveLink);

    appState = setGeneratedLink(appState, textareaGeneratedLink.value);
})

btnCopyGeneratedLink.addEventListener('click', (e) => {
    e.preventDefault();
    copyTextToClipboard(textareaGeneratedLink, CONSTANTS.LINK_TYPE.DEFAULT);
})

btnCopyAudio.addEventListener('click', (e) => {
    e.preventDefault();
    copyTextToClipboard(textAreaAudio, CONSTANTS.LINK_TYPE.AUDIO);
})

btnCopyVideo.addEventListener('click', (e) => {
    e.preventDefault();
    copyTextToClipboard(textAreaVideo, CONSTANTS.LINK_TYPE.VIDEO);
})



