﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExploreAngular.Models;

namespace ExploreAngular.Controllers
{
    [Route("api/EmployeeDetails/")]
    [ApiController]
    public class EmployeeDetailsController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public EmployeeDetailsController(EmployeeDBContext context)
        {
             _context = context;
        }

        // GET: api/EmployeeDetails
       
       [Route("GetEmployee")]
        public ActionResult<List<Employee>> GetEmployee()
        {
            var db = _context.Employee;
            List<Employee> data = db.ToList();
            return data;
        }


        [Route("GetEmployeebyId/{id}")]
        // GET: api/EmployeeDetails/5
        [HttpGet]
        public async Task<IActionResult> GetEmployee(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // PUT: api/EmployeeDetails/5
        [Route("PutEmployee/{id}")]
        [HttpPut]
        public async Task<IActionResult> PutEmployee([FromRoute] int id, [FromBody] Employee employee)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != employee.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        [Route("PostEmployee")]
        // POST: api/EmployeeDetails
        public async Task<IActionResult> PostEmployee([FromBody] Employee employee)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.EmployeeId }, employee);
        }

        // DELETE: api/EmployeeDetails/5

        [HttpDelete]
        [Route("DeleteEmployee/{id}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employee.Any(e => e.EmployeeId == id);
        }
    }
}