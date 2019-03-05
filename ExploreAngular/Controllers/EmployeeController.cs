using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ExploreAngular.Model;
using System.Net.Http;
using System.Net;

namespace ExploreAngular.Controllers
{


    public class EmployeeController : ControllerBase
    {
        DataAcess obj = new DataAcess();


        // GET: api/Employees
        //public ActionResult<EmployeeEntity> GetEmployees()
        //{
        //    return obj.GetEmployee();
        //}


        //[HttpGet]
        //[Route("EmployeeDetailsGet")]
        //public IEnumerable<EmployeeEntity> EmployeeDetailsGet()
        //{

        //    List<EmployeeEntity> lst = new List<EmployeeEntity>();
        //    lst = obj.GetEmployee();
        //    return lst;
        //}

        //private static string[] Summaries = new[]
        //{
        //    "One", "Two", "Three", "four", "Five", "six", "seven", "Eight", "nine", "Ten"
        //};

        //[Route("api/Employee/mySampleMetahod")]
        //[HttpGet("[action]")]

        [HttpGet]
        [Route("api/Employee")]
        public EmployeeEntity getMSG(EmployeeEntity employeeEntity)
        {
            // return Request.CreateResponse(HttpStatusCode.OK, "testing Message");

            employeeEntity.EmployeeID = 1;
            employeeEntity.FirstName = "Vishal";
            employeeEntity.LastName = "Oulkar";
            employeeEntity.Salary = "265646";
            employeeEntity.Gender = "Male";
            return employeeEntity;



        }


    }
}