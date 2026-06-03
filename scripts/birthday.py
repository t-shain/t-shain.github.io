

from datetime import date
import datetime



def days_on_earth(from_: date, to: int):
    ten_thousandth_day = from_ + datetime.timedelta(days=to)
    return ten_thousandth_day
    


print(days_on_earth(date(2004,9,24), 9999))