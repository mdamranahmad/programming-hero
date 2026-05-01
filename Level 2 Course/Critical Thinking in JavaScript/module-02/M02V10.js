//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

// Working sol1
/*
const binnedEvents = events.reduce((table, event) => {
    const {timestamp} = event;
    const time = new Date(timestamp);
    !table["2025-10-22T10:00:00.000Z"] ? 
        table["2025-10-22T10:00:00.000Z"] = {total : 1} :
            time < new Date("2025-10-22T10:30:00.000Z") ?
                table["2025-10-22T10:00:00.000Z"] = {total:
                    table["2025-10-22T10:00:00.000Z"].total += 1}:
                        !table["2025-10-22T10:30:00.000Z"] ?
                            table["2025-10-22T10:30:00.000Z"] = {total : 1} :
                                time < new Date("2025-10-22T11:00:00.000Z") ?
                                    table["2025-10-22T10:30:00.000Z"] = {total : 
                                        table["2025-10-22T10:30:00.000Z"].total + 1}:
                                            !table["2025-10-22T11:00:00.000Z"] ?
                                                table["2025-10-22T11:00:00.000Z"] = {total : 1} :
                                                    table["2025-10-22T11:00:00.000Z"] = {total : 
                                                        table["2025-10-22T11:00:00.000Z"].total + 1};
    return table;
}, {});

console.log(binnedEvents);
*/

// output
/* 
{
  '2025-10-22T10:00:00.000Z': { total: 3 },
  '2025-10-22T10:30:00.000Z': { total: 2 },
  '2025-10-22T11:00:00.000Z': { total: 1 }
}
*/

const binnedEvents = events.reduce((table, event) => {
    const {timestamp} = event;
    const interval = 30 * 60 * 1000;
    // const eventTime = new Date(Math.floor(Date.parse(timestamp) / interval) * interval);
    // const eventTime = new Date(Math.floor(new Date(timestamp) / interval) * interval);
    // const eventTime = new Date(Math.floor(new Date(timestamp).getTime() / interval) * interval);
    const eventTime = new Date(Math.floor(new Date(timestamp).getTime() / interval) * interval).toISOString();
    // console.log(new Date(Math.floor(Date.parse(timestamp))));
    !table[eventTime] ?
        table[eventTime] = {time: 1} :
            table[eventTime].time += 1
    return table;
}, {})

console.log(binnedEvents);

// output 
/* 
{
  'Wed Oct 22 2025 16:00:00 GMT+0600 (Bangladesh Standard Time)': { time: 3 },
  'Wed Oct 22 2025 16:30:00 GMT+0600 (Bangladesh Standard Time)': { time: 2 },
  'Wed Oct 22 2025 17:00:00 GMT+0600 (Bangladesh Standard Time)': { time: 1 }
}
*/
/*
{
  '2025-10-22T10:00:00.000Z': { time: 3 },
  '2025-10-22T10:30:00.000Z': { time: 2 },
  '2025-10-22T11:00:00.000Z': { time: 1 }
}
*/