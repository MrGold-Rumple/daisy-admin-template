import moment from "moment";
import type { CalendarEvent, CalendarTheme } from "../types";

export const CALENDAR_INITIAL_EVENTS: CalendarEvent[] = [
    {title : "Product call", theme : "GREEN" as CalendarTheme, startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
    {title : "Meeting with tech team", theme : "PINK" as CalendarTheme, startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
    {title : "Meeting with Cristina", theme : "PURPLE" as CalendarTheme, startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
    {title : "Meeting with Alex", theme : "BLUE" as CalendarTheme, startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
    {title : "Product Call", theme : "GREEN" as CalendarTheme, startTime : moment().startOf('day'), endTime : moment().endOf('day')},
    {title : "Client Meeting", theme : "PURPLE" as CalendarTheme, startTime : moment().startOf('day'), endTime : moment().endOf('day')},
    {title : "Client Meeting", theme : "ORANGE" as CalendarTheme, startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
    {title : "Product meeting", theme : "PINK" as CalendarTheme, startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
    {title : "Sales Meeting", theme : "GREEN" as CalendarTheme, startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
    {title : "Product Meeting", theme : "ORANGE" as CalendarTheme, startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
    {title : "Marketing Meeting", theme : "PINK" as CalendarTheme, startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
    {title : "Client Meeting", theme : "GREEN" as CalendarTheme, startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
    {title : "Sales meeting", theme : "BLUE" as CalendarTheme, startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
    {title : "Client meeting", theme : "PURPLE" as CalendarTheme, startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
];

export const RECENT_TRANSACTIONS = [
    {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@bloom.dev", location : "Paris", amount : 100, date : moment().endOf('day')},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@bloom.dev", location : "London", amount : 190, date : moment().add(-1, 'd').endOf('day')},
    {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@bloom.dev", location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@bloom.dev", location : "Peru", amount : 111, date : moment().add(-1, 'd').endOf('day')},
    {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@bloom.dev", location : "London", amount : 190, date : moment().add(-2, 'd').endOf('day')},
    {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@bloom.dev", location : "Paris", amount : 230, date : moment().add(-2, 'd').endOf('day')},
    {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@bloom.dev", location : "Canada", amount : 331, date : moment().add(-2, 'd').endOf('day')},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@bloom.dev", location : "London", amount : 581, date : moment().add(-2, 'd').endOf('day')},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "ereena@bloom.dev", location : "Tokyo", amount : 151, date : moment().add(-2, 'd').endOf('day')},
    {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "jhon@bloom.dev", location : "Paris", amount : 91, date : moment().add(-2, 'd').endOf('day')},
    {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@bloom.dev", location : "Canada", amount : 161, date : moment().add(-3, 'd').endOf('day')},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@bloom.dev", location : "US", amount : 121, date : moment().add(-3, 'd').endOf('day')},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "jhon@bloom.dev", location : "Tokyo", amount : 713, date : moment().add(-3, 'd').endOf('day')},
    {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@bloom.dev", location : "London", amount : 217, date : moment().add(-3, 'd').endOf('day')},
    {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@bloom.dev", location : "Paris", amount : 117, date : moment().add(-3, 'd').endOf('day')},
    {name : "Miya", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "jhon@bloom.dev", location : "Canada", amount : 612, date : moment().add(-3, 'd').endOf('day')},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "matrix@bloom.dev", location : "London", amount : 631, date : moment().add(-3, 'd').endOf('day')},
    {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@bloom.dev", location : "Tokyo", amount : 151, date : moment().add(-3, 'd').endOf('day')},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@bloom.dev", location : "Paris", amount : 617, date : moment().add(-3, 'd').endOf('day')},


];

export default Object.freeze({
    CALENDAR_INITIAL_EVENTS,
    RECENT_TRANSACTIONS
});
