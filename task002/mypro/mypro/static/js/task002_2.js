$("#btn").click(function(){
    var input = $("#txt").val();
    //console.log(input)
    if (!input) {
        alert('输入年月日: YYYY-MM-DD')
    };
   
    targetTime = dataParse(input);//global 
    runTimer(true);
});
var timer;
var targetTime;

function dataParse(src){
    var reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)d+$");
    if (typeof(src) == 'string') {
        console.log('Date.parse(inputdate)'+Date.parse(src));
        console.log('reg.test(inputdate)'+reg.test(src))
        if (reg.test(src) || isNaN(Date.parse(src))) {
            var d = src.split(/ |T/),
                d1 = d.length >1 ? d[1].split(/[^\d]/) : [0, 0, 0],
                d0 = d[0].split(/[^\d]/);
            return new Date(d0[0]-0, d0[1]-1, d0[2]-0, d1[0]-0, d1[1]-0, d1[2]-0);
        } else {
            return new Date(src)//return date with Sun Sep 27 2015 08:00:00 GMT+0800 
        }
    }
    return new Date();
}

function runTimer(first){
    var nowTime = new Date();
    var leftTime = targetTime - nowTime;
    if (first && leftTime < 0) {
        alert('查询时间 小于 当前时间');
        return;
    }
    printTime(leftTime);
    if (leftTime/ 1000 == 0) {
        return;
    };
    timer = setTimeout(runTimer, 1000); 
}

function printTime(leftTime) {
    var leftDate = {
        dd: parseInt(leftTime/ 1000/ 60/ 60/ 24, 10),
        hh: parseInt(leftTime/ 1000/ 60/ 60% 24, 10),
        mm: parseInt(leftTime/ 1000/ 60% 60, 10),
        ss: parseInt(leftTime/ 1000% 60, 10)
    }
    $("#result").text('' + dateFormat(targetTime, '距离yyyy年MM月dd日')
                        + format('还有#{dd}天#{hh}小时#{mm}分#{ss}秒', leftDate));
}

function dateFormat(source, pattern) {
    //console.log(source+'dateFormat')
    if ('string' != typeof pattern) {
        return source.toString();
    }
    function replacer(patternPart, result) {
        pattern = pattern.replace(patternPart, result);
        //console.log(pattern+'replace')
    }
    var year    = source.getFullYear(),
        month   = source.getMonth() + 1,
        date2   = source.getDate(),
        hours   = source.getHours(),
        minutes = source.getMinutes(),
        seconds = source.getSeconds();
        //console.log(typeof(year))
    replacer(/yyyy/g, (year));
    replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
    replacer(/MM/g, pad(month, 2));
    replacer(/M/g, month);
    replacer(/dd/g, pad(date2, 2));
    replacer(/d/g, date2);

    replacer(/HH/g, pad(hours, 2));
    replacer(/H/g, hours);
    replacer(/hh/g, pad(hours % 12, 2));
    replacer(/h/g, hours % 12);
    replacer(/mm/g, pad(minutes, 2));
    replacer(/m/g, minutes);
    replacer(/ss/g, pad(seconds, 2));
    replacer(/s/g, seconds);
    //console.log(pattern)
    return pattern;
};

function pad(source, length) {
    var pre = "",
        negative = (source < 0),
        string = String(Math.abs(source));

    if (string.length < length) {
        pre = (new Array(length - string.length + 1)).join('0');
    }

    return (negative ?  "-" : "") + pre + string;
}

function format(source, opts) {
    source = String(source);
    var data = Array.prototype.slice.call(arguments,1), toString = Object.prototype.toString;
    if(data.length){
        data = data.length == 1 ?
            /* ie 下 Object.prototype.toString.call(null) == '[object Object]' */
            (opts !== null && (/\[object Array\]|\[object Object\]/.test(toString.call(opts))) ? opts : data)
            : data;
        return source.replace(/#\{(.+?)\}/g, function (match, key){
            var replacer = data[key];
            // chrome 下 typeof /a/ == 'function'
            if('[object Function]' == toString.call(replacer)){
                replacer = replacer(key);
            }
            return ('undefined' == typeof replacer ? '' : replacer);
        });
    }
    return source;
}


