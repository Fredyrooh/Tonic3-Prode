const set_dir = require("../utils");
const { parse_date } = require("../utils/init_date");
const { save_data } = require("../utils/save_data");

const find_obj_ix = (date_obj, data) => {
  const { year, month } = date_obj;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]['year'],year,data[i]['month'],month,'eeeeeeeeeeeeeeeees')
    if (data[i]["year"] === year && data[i]["month"] === month) return i;
  }
};

const save_date = (dir, data) => {
  const { year, str_month } = parse_date(new Date(), true);
  const obj_ix = find_obj_ix({ month: str_month, year },data);
  console.log(obj_ix,'awdiawdoi')
  if (obj_ix!==0 && !obj_ix) {
    data.push({ year, month: str_month, users: 1 });
    return save_data(dir, data);
  } else {
    data[obj_ix].users += 1;
    return save_data(dir, data);
  }
};

module.exports = {
  inc_registed_acc: () => {
    const register_dir = set_dir("register_summary", []);
    const { data, dir } = register_dir;
    if (!save_date(dir, data)) {
      data[year][str_month].users += 1;
      save_data(dir, data);
    }
  },
};
