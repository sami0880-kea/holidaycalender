# 📅 Holiday Calender
## Internship Challenge @ Tech Chapter

## Demo

[Live Preview]()

## Challenge

#### Background
For the Tech Chapter timeregistration we need to notify employees if they forget to do their time registration. However, holidays are days off why they do not need to fill in their hours.  

**Hint:**
Holidays are a national mater not supported by moment.js, date-fns or Luxon, typically used for Calendar functionality within NodeJs and TypeScript. Especially the easter can cause issues, since the days will vary from one year to the next based on the moon cycle. Also Maundy Thursday is a Holiday in Denmark but not in other countries like Sweden. Salling Group, that runs a large number of supermarkets has exposed an [API](https://developer.sallinggroup.com/api-reference#apis-holidays) of Danish holidays that may help you in succeeding this task. You will need to sign up for a token before you can start the integration.

#### Userstory 1
**AS AN** employee  
**I WANT** an calendar overview of holidays within a date range
**SO THAT** I can better plan my upcoming holiday.

#### Accept criteria
**Scenario: Holiday**
**GIVEN** a period from January 1st 2024 to June 30th 2024
**WHEN** displaying calendar overview
**THEN** mark January 1 as New Years day
**AND** mark March 28 as Maundy Thursday
**AND** mark March 29 as Good Friday
**AND** mark March 31 as Easter Sunday
**AND** mark April 1 as Easter Monday
**AND** mark May 9 as Ascension Day
**AND** mark May 19 as Whit Sunday
**AND** mark May 20 as Whit Monday
**AND** mark June 5 as Constitution Day

*From [Tech Chapter - Intern Challenge](https://github.com/techchapter/interns-challenge?tab=readme-ov-file)*

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file in the server folder.

`SALLING_API_TOKEN`


## Features

- Show holidays in Denmark (Retrieved from [Salling API](https://developer.sallinggroup.com/api-reference#apis-holidays))
- Shows days for the first half of the year
- Shows current day highlighted
- Shows week numbers
- Pagination (Go the next or previous years)

## Screenshots

![Holiday Calender](https://i.imgur.com/OWRQ2rB.png)

### Author
- [@sami0880-kea](https://www.github.com/sami0880-kea)