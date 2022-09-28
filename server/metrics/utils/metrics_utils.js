const { parse_date, calculate_log_time } = require("./init_date");
const before_user_update='before_user_update'
const last_user_update='last_user_update'
const total = 'total'
const set_dates_props=(permanence_logs,date_now)=>{
    const {year,month,day,hours,mins}=date_now
            if(!permanence_logs[year])permanence_logs[year]={}
            if(!permanence_logs[year][month])permanence_logs[year][month]={}
            if(!permanence_logs[year][month][day])permanence_logs[year][month][day]={}
            return permanence_logs
}


const set_log_data=(prop_day,date_now)=>{
    const {hours,mins,seconds}=date_now
    if(!prop_day.before_user_update){
        prop_day[before_user_update]={hours,mins,seconds}
        prop_day[total]={time_in_sec:0}
        return prop_day
    }
        prop_day[last_user_update]={hours,mins,seconds}
    const {time_in_sec,ausence}=calculate_log_time(prop_day.last_user_update,prop_day.before_user_update)
    if(ausence)return prop_day[before_user_update]=prop_day[last_user_update]
    prop_day[total].time_in_sec+=time_in_sec
    prop_day[before_user_update]=prop_day[last_user_update]
    return prop_day
}


module.exports={
     user_json_nav:(permanence_logs)=>{
        const {year,month,day,hours,mins,seconds}=parse_date(new Date)
        const date_now={year,month,day,hours,mins,seconds}
         permanence_logs= set_dates_props(permanence_logs,date_now)
        permanence_logs[year][month][day]= set_log_data(permanence_logs[year][month][day],date_now)
            return permanence_logs
    }
}