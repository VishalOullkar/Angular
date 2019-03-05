using System;
using System.Collections.Generic;

namespace ExploreAngular.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmpCode { get; set; }
        public string Position { get; set; }
        public string Office { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
