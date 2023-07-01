export const deviceInformation = () => {
    var module = {
        options: [],
        // @ts-ignore
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function (string: string, data: any) {
            var i = 0,
                j = 0,
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv) as any
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    var e = module.init()

    const device = navigator.userAgent.slice(navigator.userAgent.indexOf('(') + 1, navigator.userAgent.indexOf(')'))

    const len = navigator.userAgent.split(' ').length
    const browser = len > 12 ? navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 1] : `${e.browser.name}/${e.browser.version}`

    let deviceName = []
    for (let i = 1; i < device.split('; ').length; i++) {
        deviceName.push(device.split('; ')[i])
    }

    return {
        device: device.toLocaleLowerCase().includes('android') ? deviceName.join('; ') : device,
        browser: browser
    }
};


export const getGeoIPLocation = async () => {
    const data = await fetch('https://json.geoiplookup.io/')
    const res = data.json()

    return res
}

const visitorInformation = async () => {
    const geoIp = await getGeoIPLocation()

    const { ip, latitude, longitude, district, city, region, country_name, country_code, isp, asn } = geoIp

    const { device, browser } = deviceInformation()

    return { visit_time: new Date(), device, browser, ip, latitude, longitude, district, city, region, country_name, country_code, isp, asn }
}


/* eslint-disable */
// @ts-ignore
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function timestampToDatetime(UNIX_timestamp: number) {
    console.log(UNIX_timestamp)
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export const validateVisitorTime = () => {
    const date = new Date()

    if (localStorage.getItem('exp')) {
        if (Number(localStorage.getItem('exp')) < date.getTime()) {
            console.log('TRUE')
            // Add new visitor to backend
            // Add expired time +1 day
            // @ts-ignore
            const nextDate = date.addDays(1)
            console.log('Expired in :', nextDate.getTime())
            console.log('Expired in :', timestampToDatetime(nextDate.getTime()))

            localStorage.setItem('exp', nextDate.getTime())
            return true
        }
    } else {
        console.log('TRUE')
        // Add expired time +1 day
        // @ts-ignore
        const nextDate = date.addDays(1)
        console.log('Expired in :', nextDate.getTime())
        console.log('Expired in :', timestampToDatetime(nextDate.getTime()))

        localStorage.setItem('exp', nextDate.getTime())
        return true
    }

    console.log('FALSE')
    return false
}

// Example POST method implementation:
export async function insertVisitor(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export default visitorInformation