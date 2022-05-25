export const epochConversion = (timestamp) => {
    const time = new Date(timestamp*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[time.getDay()];
    return day;
}