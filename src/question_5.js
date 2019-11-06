const MILISECONDS_DAY = 86400000;
const MILISECONDS_HOUR = 3600000;
const MILISECONDS_MINUTES = 60000;

let normalizeTime = value => value < 10 ? '0' + value : value;

function isValidList(list) {
  return Array.isArray(list) && list.length;
}

function prepareRecords(records) {
  let map = new Map();
      total = records.length;
  for (let i = 0; i < total; i++) {
    let record = records[i];

    if (map.has(record.funcionario)) {
      let register = map.get(record.funcionario);
      let registerDay = register.get(record.data);

      if (!registerDay) {
        register.set(record.data, generateRecord(record));
      }

      else {
        registerDay.times.push(new Date(`${record.data} ${record.hora}`));
        registerDay.times.sort((dateA, dateB) => dateA < dateB ? -1 : 1);
        registerDay.totalDay = setTotal(registerDay.times);
      }

      map.set(record.funcionario, register);

    }

    else {
      let register = new Map();
      register.set(record.data, generateRecord(record));
      map.set(record.funcionario, register);
    }
  }

  return map;
}

function generateRecord(record) {
  return {
    times: [new Date(`${record.data} ${record.hora}`)],
    totalDay: 0
  }
}

function setTotal(listDate) {
  let total = 0;
  let totalList = listDate.length;

  for (let i = 0; i < totalList; i += 2) {
    let current = listDate[i],
        next = listDate[i + 1];

    if (next && current) {
      total += Math.abs(current - next);
    }
  }

  let hours = Math.floor((total % MILISECONDS_DAY) / MILISECONDS_HOUR);
  let minutes = Math.round(((total % MILISECONDS_DAY) % MILISECONDS_HOUR) / MILISECONDS_MINUTES);

  return `${normalizeTime(hours)}:${normalizeTime(minutes)}`;
}

function generateReport(registers) {
  let report = [];
  for(let register of registers) {
    let [employee, values] = register;

    for (let value of values) {
      let [day, reg] = value;
      report.push({
        funcionario: employee,
        data: day,
        total: reg.totalDay
      });
    }

  }
  return report;
}

function Main(records = []) {
  if (!isValidList(records)) {
    return 'Invalid List';
  }

  let registers = prepareRecords(records);
  return generateReport(registers);
}

module.exports = Main;
