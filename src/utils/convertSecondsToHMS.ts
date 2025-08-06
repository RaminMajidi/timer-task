 function convertSecondsToHMS(totalSeconds: number):string {
    console.log(totalSeconds)
    const hours = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const result = `${hours} : ${minutes} : ${seconds}`;
    return result;
}

export default convertSecondsToHMS;