using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExploreAngular.Models
{
    public partial class EmployeeForm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}",ApplyFormatInEditMode =true)]
        public DateTime? Dob { get; set; }
        public bool? IsActiveEmp { get; set; }
        public string Country { get; set; }
        public string Imageurl { get; set; }
    }
}
