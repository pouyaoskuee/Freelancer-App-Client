import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function DatePickerField({id, label, date, setDate}) {
    console.log(DatePicker)
    return (
        <div>
            <label className={'mb-4'} htmlFor={id}>{label}</label>
            <DatePicker
                id={id}
                value={date}
                onChange={(e) => setDate(e)}
                format="YYYY-MM-DD"
                calendar={persian}
                locale={persian_fa}
                calendarPosition={'bottom'}
            />


        </div>
    );
}

export default DatePickerField;
