//returns the hour and date to do the validations
const getTime = (date) => {
  let ipHour = new Date(date).getHours();
  let ipDate = new Date(date).toLocaleDateString();
  return { ipHour, ipDate };
};

// check if the click is already present and then save the earliest click into the result set. Else add in the subset array.
const checkClick = (resultArr, click, counter) => {
  let flag = true;
  resultArr.forEach((item, index) => {
    if (item.ip === click.ip) {
      let { ipHour: itemIpHour, ipDate: itemIpDate } = getTime(item.timestamp);
      let { ipHour: clickIpHour, ipDate: clickIpDate } = getTime(
        click.timestamp
      );
      if (itemIpDate === clickIpDate && itemIpHour === clickIpHour) {
        if (click.amount > item.amount) {
          resultArr[index] = click;
          flag = false;
        } else if (click.amount === item.amount) {
          if (
            new Date(click.timestamp).getTime() >
            new Date(item.timestamp).getTime()
          ) {
            resultArr[index] = click;
            flag = false;
          }
        } else {
          flag = false;
        }
      }
    }
  });
  if (flag) {
    resultArr.push(click);
    counter[click.ip] = (counter[click.ip] || 1) + 1;
  }
  return { resultArr, counter };
};

//delete the ip address with more than 10 counts
const deleteIpMoreThanTen = (resultArr, ipCounter) => {
  const IP = [];
  for (let key in ipCounter) {
    if (ipCounter[key] > 10) {
      IP.push(key);
    }
  }
  return resultArr.filter((ele) => !IP.includes(ele.ip));
};

//Main function to create the subset of the clicks array
const createSubset = (clicks) => {
  let ipCounter = {};
  let finalResult = [];
  clicks.forEach((click) => {
    if (finalResult.length === 0) {
      finalResult.push(click);
      ipCounter[click.ip] = 1;
    } else {
      let { resultArr, counter } = checkClick(finalResult, click, ipCounter);
      finalResult = resultArr;
      ipCounter = counter;
    }
  });
  finalResult = deleteIpMoreThanTen(finalResult, ipCounter);
  return finalResult;
};

module.exports = createSubset;
