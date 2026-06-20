import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function DatePickerField({id, label, date, setDate}) {
    return (
        <div className={'flex flex-col'}>
            <label className={'mb-1'} htmlFor={id}>{label}</label>
            <DatePicker
                id={id}
                value={date}
                onChange={(e) => setDate(e)}
                format="YYYY-MM-DD"
                calendar={persian}
                locale={persian_fa}
                calendarPosition={'bottom-center'}
                inputClass={'input w-full'}
            />
        </div>
    );
}

export default DatePickerField;
