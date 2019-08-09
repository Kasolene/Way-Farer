
import trips from '../models/Trips';
import users from '../models/Users';
const bookings = [
 
  {
    bookingId: 1,
    userId : users[1].userId,
    tripId:trips[0].tripId,
    busLicenseNumber : trips[0].busLicenseNumber,
    tripDate : trips[0].tripDate,
    userFistName : users[1].firstName,
    userLastName : users[1].lastName,
    userEmail: users[1].email,
    createdOn : Date.now(),
  },
  {
    bookingId: 2,
    userId : users[2].userId,
    tripId:trips[0].tripId,
    busLicenseNumber : trips[0].busLicenseNumber,
    tripDate : trips[0].tripDate,
    userFistName : users[2].firstName,
    userLastName : users[2].lastName,
    userEmail: users[2].email,
    createdOn : Date.now(),
  },

];
export default bookings;
