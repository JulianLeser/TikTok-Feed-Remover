if (window.location.href === "https://www.tiktok.com/" || window.location.href === "https://www.tiktok.com") {
    window.location.href = "https://www.tiktok.com/following/";
} else if (window.location.href === "https://www.tiktok.com/explore" || window.location.href === "https://www.tiktok.com/explore") {
    window.location.href = "https://www.tiktok.com/following/";
} else if (window.location.href.includes("tiktok.com/?lang=")) {
    window.location.href = "https://www.tiktok.com/following/";
}
if (window.location.href.includes("tiktok.com")) {
    console.log("Running on TikTok:", window.location.href);

    const intervalId = setInterval(() => {
        console.log("Removed Feed");
        const list = document.getElementsByClassName("css-nwhccz-UlMainNav")[0];
        if (list && list.children.length >= 2) {
            // Remove the first two list items
            list.removeChild(list.children[0]);
            list.removeChild(list.children[0]);

            // Clear the interval once the task is done
            clearInterval(intervalId);
            console.log("List items removed");
        }
    }, 1000);  // Check every second
}
