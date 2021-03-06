export default function(value) {

    let str;

    const date = new Date(value);
    var nowValue = new Date() - value;
    var nowTime;
    if (nowValue < 60000) {
        nowValue = '刚刚';
        return nowValue;
    } else if (60000 < nowValue && nowValue < 3600000) {
        nowTime = Math.round(nowValue / 60000) + "分钟前";
        return nowTime;
    } else if (nowValue > 3600000 && nowValue < 86400000) {
        nowTime = Math.floor(nowValue / 3600000) + "小时前";
        return nowTime;
    } else if (nowValue > 86400000) {
        str = 'y-m-d H:i:s'
        str = str.replace('y', date.getFullYear());
        str = str.replace('m', date.getMonth() + 1);
        str = str.replace('d', toDB(date.getDate()));
        str = str.replace('H', toDB(date.getHours()));
        str = str.replace('i', toDB(date.getMinutes()));
        str = str.replace('s', toDB(date.getSeconds()));
        return str;
    }


}

function toDB(nub) {
    return nub < 10 ? "0" + nub : "" + nub;
}