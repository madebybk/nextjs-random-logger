// API to generate random JSON log data every second for 10 minutes

const generateRandomLogData = (num) => {
    // Get current time
    const currTime = new Date().toISOString();

    // Create randome error code (between 1 and 5)
    const randomNum = Math.floor(Math.random() * 5 + 1);
    const errCode = `err_0${randomNum}`;

    // JSON log data
    const logData = JSON.stringify({timestamp: `${currTime}`,level: "info",error_code: errCode,server_protocol: "HTTP/1.1",request_method: "GET",request_uri: "/api/logger",message: `This is a sample log message no. ${num}`}).replace(/\\n/g, '');
    console.log(logData)
}

const generateData = async (numLogs, duration) => {
    const totalSeconds = duration * numLogs * 60;
    const freq = 1000 / numLogs;
    for (let i = 0; i < totalSeconds; i++) {
        setTimeout(function timer() {
            generateRandomLogData(i);
        }, i * freq);
    }
    return 'Job finished';
}

export default async function handler(req, res) {
    // Get current time
    const currTime = new Date().toISOString();
    console.log(JSON.stringify({timestamp: `${currTime}`,level: "info",error_code: 'info_01',server_protocol: "HTTP/1.1",request_method: "GET",request_uri: "/api/logger",message: "Log generation initiated.."}))

    const message = await generateData(req.body.numLogs, req.body.duration);

    res.json({ status: message });
}