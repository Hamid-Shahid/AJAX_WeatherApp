onmessage = (message) => {
    if (message.data === "start") {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        postMessage(result);
    }
};